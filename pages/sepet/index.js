import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import CartItem from '../../components/CartItem'
import TextInput from '../../components/TextInput'
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
import { Row, Col } from 'react-bootstrap'
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
        <div className={styles.card}>
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
        </div>
        <div className={styles.titleArea}>
          <h3>Siparişin Teslim Edileceği Adres</h3>
          <IconButton className={styles.addButton}>
            <Plus />
          </IconButton>
        </div>
        <div
          className={cn(
            styles.card,
            styles.addressCard,
            selectedAddress === 0 && styles.active
          )}
          onClick={() => setSelectedAddress(0)}
        >
          <div className={styles.addressTitle}>
            <Home />
            <h5>Ev Adresi</h5>
          </div>
          <div className={styles.adressInner}>
            <div className="addressItem">
              <Row>
                <Col xs={2}>
                  <div className="d-flex">
                    <h6>Alıcı Adı</h6>
                  </div>
                </Col>
                <Col xs={9}>
                  <span>Berkay Doğukan Urhan</span>
                </Col>
              </Row>
            </div>
            <div className="addressItem">
              <Row>
                <Col xs={2}>
                  <div className="d-flex">
                    <h6>Teslim Adresi</h6>
                  </div>
                </Col>
                <Col xs={9}>
                  <span>4219 Davis Avenue Fremont California</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div
          className={cn(
            styles.card,
            styles.addressCard,
            selectedAddress === 1 && styles.active
          )}
          onClick={() => setSelectedAddress(1)}
        >
          <div className={styles.addressTitle}>
            <Business />
            <h5>İş Adresi</h5>
          </div>
          <div className={styles.adressInner}>
            <div className="addressItem">
              <Row>
                <Col xs={2}>
                  <div className="d-flex">
                    <h6>Alıcı Adı</h6>
                  </div>
                </Col>
                <Col xs={9}>
                  <span>Berkay Doğukan Urhan</span>
                </Col>
              </Row>
            </div>
            <div className="addressItem">
              <Row>
                <Col xs={2}>
                  <div className="d-flex">
                    <h6>Teslim Adresi</h6>
                  </div>
                </Col>
                <Col xs={9}>
                  <span>4219 Davis Avenue Fremont California</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.titleArea}>
          <h3>Ödeme Yöntemleri</h3>
        </div>
        <div className={styles.paymentOptions}>
          <div
            className={selectedPayment === 0 && styles.activePayment}
            onClick={() => setSelectedPayment(0)}
          >
            <div className={styles.card}>
              <div className={styles.addressTitle}>
                <div className="d-flex">
                  <CreditCard />
                  <h5>İş Adresi</h5>
                </div>
                <IconButton className={styles.arrow}>
                  <Arrowbottom />
                </IconButton>
              </div>
            </div>
            <div className={styles.paymentContent}></div>
          </div>
          <div
            className={selectedPayment === 1 && styles.activePayment}
            onClick={() => setSelectedPayment(1)}
          >
            <div className={styles.card}>
              <div className={styles.addressTitle}>
                <div className="d-flex">
                  <CreditCard />
                  <h5>İş Adresi</h5>
                </div>
                <IconButton className={styles.arrow}>
                  <Arrowbottom />
                </IconButton>
              </div>
            </div>
            <div className={styles.paymentContent}></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
