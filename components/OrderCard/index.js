import React from 'react'
import styles from './order.module.css'
import propTypes from 'prop-types'
import Accordion from '../Accordion'
import { Col, Row } from 'react-bootstrap'
export default function index({ orderDetail }) {
  return (
    <Accordion
      className={styles.orderCard}
      head={
        <div className={styles.head}>
          <Row>
            <Col xs={3}>
              <div className={styles.wrapper}>
                <span className={styles.title}>Sipariş Kodu</span>
                <span className={styles.date}>ab1235767aass</span>
              </div>
            </Col>
            <Col xs={3}>
              <div className={styles.wrapper}>
                <span className={styles.title}>Sipariş Tarihi</span>
                <span className={styles.date}>{orderDetail.orderDate}</span>
              </div>
            </Col>
            <Col xs={3}>
              <div className={styles.wrapper}>
                <span className={styles.title}>Ödeme Şekli</span>
                <span className={styles.date}>
                  {orderDetail.paymentType === 2 && 'Kapıda Kredi Kartı'}
                </span>
              </div>
            </Col>
            <Col xs={3}>
              <div className={styles.wrapper}>
                <span className={styles.title}>Tutar</span>
                <span className={styles.price}>
                  {parseFloat(orderDetail.price).toFixed(2)} ₺
                </span>
              </div>
            </Col>
          </Row>
        </div>
      }
    >
      <div className={styles.title}>
        <Row>
          <Col xs={6}>
            <span>Yemek</span>
          </Col>
          <Col xs={2} className={styles.titleCenter}>
            <span>Fiyat</span>
          </Col>
          <Col xs={2} className={styles.titleCenter}>
            <span>Adet</span>
          </Col>
          <Col xs={2} className={styles.titleCenter}>
            <span>Tutar</span>
          </Col>
        </Row>
      </div>
      <div className={styles.orderDetailArea}>
        <Row className={styles.orderItem}>
          <Col xs={6}>
            <span className={styles.foodName}>Jet Burger</span>
          </Col>
          <Col xs={2} className={styles.titleCenter}>
            <span className={styles.count}>2</span>
          </Col>
          <Col xs={2} className={styles.titleCenter}>
            <span className={styles.count}>2</span>
          </Col>
          <Col xs={2} className={styles.titleCenter}>
            <span className={styles.count}>2</span>
          </Col>
        </Row>
      </div>
      <div className={styles.addresDetail}>
        <h5>Teslimat Adresi</h5>
        <span>Berkay Doğukan Urhan</span>
        <span>4219 Davis Avenue Fremont California</span>
      </div>
    </Accordion>
  )
}

index.proptypes = {
  orderDetail: propTypes.object
}
