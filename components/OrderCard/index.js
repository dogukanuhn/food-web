import React from 'react'
import styles from './order.module.css'
import propTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
export default function index({ orderDetail }) {
  return (
    <div className={styles.orderCard}>
      <Row>
        <Col xs={3}>
          <div className={styles.wrapper}>
            <span className={styles.title}>Sipariş Tarihi</span>
            <span className={styles.date}>20.03.2020 - 15.15</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className={styles.wrapper}>
            <span className={styles.title}>Ödeme Şekli</span>
            <span className={styles.date}>Kapıda Kredi Kartı</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

index.proptypes = {
  orderDetail: propTypes.object
}
