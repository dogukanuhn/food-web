import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Close } from '../icons'
import styles from './cartitem.module.css'
export default function index({ src, name, count, price }) {
  return (
    <div id={styles.cartItem}>
      <Row className={styles.Row}>
        <Col xs={2} className="pr-0">
          <img src={src} alt="" />
        </Col>
        <Col xs={5}>
          <span className={styles.foodName}>{name}</span>
        </Col>
        <Col xs={3} className="p-0">
          <div className={styles.numberArea}>
            <input type="number" value={count} />
            <span className={styles.price}>{price} TL</span>
          </div>
        </Col>
        <Col xs={2}>
          <span className={styles.cancelButton}>
            <Close />
          </span>
        </Col>
      </Row>
    </div>
  )
}
