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
            <Col xs={4}>
              <div className={styles.wrapper}>
                <span className={styles.title}>Sipariş Tarihi</span>
                <span className={styles.date}>{orderDetail.orderDate}</span>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles.wrapper}>
                <span className={styles.title}>Ödeme Şekli</span>
                <span className={styles.date}>
                  {orderDetail.paymentType === 2 && 'Kapıda Kredi Kartı'}
                </span>
              </div>
            </Col>
            <Col xs={4}>
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
    ></Accordion>
  )
}

index.proptypes = {
  orderDetail: propTypes.object
}
