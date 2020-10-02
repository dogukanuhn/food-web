import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import CartItem from '../../components/CartItem'
import TextInput from '../../components/TextInput'
import AddressCard from '../../components/AddressCard'
import Card from '../../components/Card'

import IconButton from '../../components/IconButton'
import {
  Plus,
  Home,
  Business,
  CreditCard,
  Arrowbottom
} from '../../components/icons'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import styles from './cartpage.module.css'
import cn from 'classnames'
import { Row, Col, Form } from 'react-bootstrap'
export default function index() {
  const cartItems = useSelector((state) => state['RootReducer']['cart'])
  const [selectedAddress, setSelectedAddress] = useState(0)
  const [selectedPayment, setSelectedPayment] = useState(0)

  const cartItemCount = useSelector(
    (state) => state['RootReducer']['cartTotalItem']
  )

  const [totalPrice, setTotalPrice] = useState(0)
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

        <div className={styles.titleArea}>
          <h3>Siparişin Teslim Edileceği Adres</h3>
          <IconButton className={styles.addButton}>
            <Plus />
          </IconButton>
        </div>

        <AddressCard
          icon={<Home />}
          name="Berkay Doğukan Urhan"
          addres="4219 Davis Avenue Fremont California"
          type="Ev Adresi"
          onClick={() => setSelectedAddress(0)}
          isSelected={selectedAddress === 0}
        />
        <AddressCard
          icon={<Home />}
          name="Berkay Doğukan Urhan"
          addres="4219 Davis Avenue Fremont California"
          type="Ev Adresi"
          click={() => setSelectedAddress(1)}
          isSelected={selectedAddress === 1}
        />

        <div className={styles.titleArea}>
          <h3>Ödeme Yöntemleri</h3>
        </div>

        <div className={styles.paymentOptions}>
          <div
            className={selectedPayment === 0 && styles.activePayment}
            onClick={() => setSelectedPayment(0)}
          >
            <Card className={styles.card}>
              <div className={styles.addressTitle}>
                <div className="d-flex">
                  <CreditCard />
                  <h5>Online Ödeme</h5>
                </div>
                <IconButton className={styles.arrow}>
                  <Arrowbottom />
                </IconButton>
              </div>
            </Card>
            <div className={styles.paymentContent}>
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
                      <Form.Check type="checkbox" label="3D Secure" />
                    </Col>
                  </Form.Row>
                </form>
              </div>
            </div>
          </div>
          <div
            className={selectedPayment === 1 && styles.activePayment}
            onClick={() => setSelectedPayment(1)}
          >
            <Card className={styles.card}>
              <div className={styles.addressTitle}>
                <div className="d-flex">
                  <CreditCard />
                  <h5>Kapıda Ödeme</h5>
                </div>
                <IconButton className={styles.arrow}>
                  <Arrowbottom />
                </IconButton>
              </div>
            </Card>
            <div className={styles.paymentContent}>
              <div className={styles.radio}>
                <input type="radio" id="nakit" name="payment" value="nakit" />
                <label for="nakit">
                  Nakit <span className={styles.muted}>(Nakit ödeme)</span>
                </label>
              </div>
              <div className={styles.radio}>
                <input type="radio" id="kredi" name="payment" value="kredi" />
                <label for="kredi">
                  Kredi Kartı{' '}
                  <span className={styles.muted}>
                    (Sipariş tesliminde kredi kartı / banka kartı ile ödeme)
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttonArea}>
          <Button className={styles.buyButton}>Satın Al</Button>
        </div>
      </div>
    </Layout>
  )
}
