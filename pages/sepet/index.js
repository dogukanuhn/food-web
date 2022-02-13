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
    name: 'Berkay Doğukan',
    surname: 'Urhan',
    registrationAddress: '4219 Davis Avenue Fremont California',
    line: 'Istanbul',
    province: 'Bahçelievler',
    district: 'Şirinevler',
  })

  const cartItemCount = useSelector(
    (state) => state['RootReducer']['cartTotalItem']
  )

  const [totalPrice, setTotalPrice] = useState(0)
   const [cvv, setCVV] = useState("123");

  const router = useRouter()

  useEffect(() => {
    if (cartItemCount > 0) {
      var total = parseFloat(
        cartItems.reduce((a, b) => a + b.sellPrice, 0)
      ).toFixed(2)
    } else {
      router.push('/')
    }

    setTotalPrice(total)
  }, [cartItems])

  const initPayment = () => {
    axios
      .post('https://localhost:5001/api/order', {
        orderItems: cartItems.map(item => ({productId:item.productId,price:item.sellPrice,count:1})),
        address: {
          line:userDetail.line,
          province:userDetail.province,
          district:userDetail.district,
        },
        payment: {
          cardNumber: '5890040000000016',
          cardName: 'Berkay Doğukan Urhan',
          expireMonth: '12',
          expireYear: '2030',
          cvv: cvv,
        }
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
            </div>
            <span className={styles.pricingText}>
              <span className={styles.totalText}>Toplam: </span>
              {totalPrice} ₺
            </span>
          </div>
        </Card>

        <Row>
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

        <div className={styles.titleArea}>
          <h3>Ödeme Yöntemleri</h3>
        </div>

        <div className={styles.paymentOptions}>
          <Row>
            <Col xs={12}>
              <Accordion>
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
                        <TextInput onChange={(event) => setCVV(event.target.value)} placeholder="CVV" />
                      </Col>
                      <Col xs={12}>
                        <div className={styles.radio}>
                          <input
                            type="checkbox"
                            id="3dsecure"
                            name="payment"
                            value="3dsecure"
                          />
                          <label htmlFor="3dsecure">3D Secure</label>
                        </div>
                      </Col>
                    </Form.Row>
                  </form>
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
