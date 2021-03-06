import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import CartItem from '../../components/CartItem'
import TextInput from '../../components/TextInput'
import AddressCard from '../../components/AddressCard'
import Card from '../../components/Card'
import TextArea from '../../components/TextArea'
import Accordion from '../../components/Accordion'
import IconButton from '../../components/IconButton'
import { Plus, Home, Business, CreditCard } from '../../components/icons'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import styles from './cartpage.module.css'
import { Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'
export default function index() {
  const cartItems = useSelector((state) => state['RootReducer']['cart'])

  const [selectedAddress, setSelectedAddress] = useState(0)
  const [userDetail, setUserDetail] = useState({
    id: 'test1',
    name: 'Berkay Doğukan',
    surname: 'Urhan',
    email: 'mail@dogukanurhan.com',
    identityNumber: '74300864791',
    registrationAddress: '4219 Davis Avenue Fremont California',
    ip: '192.168.1.1',
    city: 'Istanbul',
    country: 'Turkey'
  })

  const cartItemCount = useSelector(
    (state) => state['RootReducer']['cartTotalItem']
  )

  const [totalPrice, setTotalPrice] = useState(0)
  const [threeD, setThreeD] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (cartItemCount > 0) {
      var total = parseFloat(
        cartItems.reduce((a, b) => a + b.sellPrice * b.count, 0)
      ).toFixed(2)
    } else {
      router.push('/')
    }

    setTotalPrice(total)
  }, [cartItems])

  const initPayment = () => {
    axios
      .post('http://localhost:3000/api/payment', {
        basket: cartItems,
        userDetail: userDetail,
        totalPrice: totalPrice,
        paymentCard: {
          cardNumber: '5890040000000016',
          cardHolderName: 'Berkay Doğukan Urhan',
          expireMonth: '12',
          expireYear: '2030',
          cvc: '123',
          registerCard: '0'
        }
      })
      .then((x) => {
        router.push('/payment/' + x.data.threeDSHtmlContent)
      })
  }

  return (
    <Layout>
      <div className="container" id={styles.cartPage}>
        <h1>Sepet</h1>
        <Card className={styles.card}>
          {cartItems.map((x, i) => {
            return (
              <CartItem
                id={i}
                src={x.image}
                name={x.name}
                count={x.count}
                price={x.sellPrice}
                ingredient={x.ingredients}
                items={x.selectedItems}
                priceClass={styles.price}
              />
            )
          })}

          <div className={styles.pricing}>
            <div className={styles.promotionArea}>
              <TextInput placeholder="Promosyon Kodu" />
              <Button color={true}>Uygula</Button>
            </div>
            <span className={styles.pricingText}>
              <span className={styles.totalText}>Toplam: </span>
              {totalPrice} ₺
            </span>
          </div>
        </Card>

        <Row>
          <Col xs={6}>
            <div className={styles.titleArea}>
              <h3>Teslim Adresi</h3>
              <IconButton className={styles.addButton}>
                <Plus />
              </IconButton>
            </div>

            <Row>
              <Col xs={12}>
                <AddressCard
                  icon={<Home />}
                  name="Berkay Doğukan Urhan"
                  addres="4219 Davis Avenue Fremont California"
                  type="Ev Adresi"
                  onClick={() => setSelectedAddress(0)}
                  isSelected={selectedAddress === 0}
                />
              </Col>
              <Col xs={12}>
                <AddressCard
                  icon={<Business />}
                  name="Berkay Doğukan Urhan"
                  addres="4219 Davis Avenue Fremont California"
                  type="İş Adresi"
                  click={() => setSelectedAddress(1)}
                  isSelected={selectedAddress === 1}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <div className={styles.titleArea}>
              <h3>Sipariş Notunuz</h3>
            </div>

            <div className={styles.noteArea}>
              <Card>
                <TextArea
                  placeholder="(Var ise) Sipariş ile ilgili notunuz..."
                  className={styles.customTextArea}
                />
              </Card>
            </div>
          </Col>
        </Row>

        <div className={styles.titleArea}>
          <h3>Ödeme Yöntemleri</h3>
        </div>

        <div className={styles.paymentOptions}>
          <Row>
            <Col xs={6}>
              <Accordion
                head={
                  <div className="d-flex">
                    <CreditCard /> <h5>Online Ödeme</h5>
                  </div>
                }
              >
                <div className={styles.creditCard}>
                  <form>
                    <Form.Row>
                      <Col xs={12}>
                        <TextInput placeholder="Kredi Kartı Numarası" />
                      </Col>
                      <Col xs={6}>
                        <TextInput placeholder="MM / YY" />
                      </Col>
                      <Col xs={6}>
                        <TextInput placeholder="CVV" />
                      </Col>
                      <Col xs={12}>
                        <div className={styles.radio}>
                          <input
                            type="checkbox"
                            id="3dsecure"
                            name="payment"
                            value="3dsecure"
                          />
                          <label for="3dsecure">3D Secure</label>
                        </div>
                      </Col>
                    </Form.Row>
                  </form>
                </div>
              </Accordion>
            </Col>
            <Col xs={6}>
              <Accordion
                head={
                  <div className="d-flex">
                    <Business /> <h5>Kapıda Ödeme</h5>
                  </div>
                }
              >
                <div className={styles.radio}>
                  <input type="radio" id="nakit" name="payment" value="nakit" />
                  <label for="nakit">
                    Nakit <span className={styles.muted}>(Nakit ödeme)</span>
                  </label>
                </div>
                <div className={styles.radio}>
                  <input type="radio" id="kredi" name="payment" value="kredi" />
                  <label for="kredi">
                    Kredi Kartı
                    <span className={styles.muted}>
                      (Sipariş tesliminde kredi kartı / banka kartı ile ödeme)
                    </span>
                  </label>
                </div>
              </Accordion>
            </Col>
          </Row>
        </div>
        <div className={styles.buttonArea}>
          <Button className={styles.buyButton} onClick={initPayment}>
            Satın Al
          </Button>
        </div>
      </div>
    </Layout>
  )
}
