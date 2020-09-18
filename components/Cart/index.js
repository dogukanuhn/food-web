import React, { useState } from 'react'
import styles from './cart.module.css'
import { ShoppingCart, Close } from '../icons'
import IconButton from '../IconButton'
import { Col, Row } from 'react-bootstrap'

export default function index() {
  const [menuState, setMenuState] = useState(false)
  return (
    <div id={styles.cart}>
      <IconButton
        className={styles.cartButton}
        click={() => setMenuState(!menuState)}
      >
        {menuState ? <Close /> : <ShoppingCart />}
      </IconButton>
      <div
        className={styles.cartList}
        style={{ display: menuState && 'block' }}
      >
        <div className={styles.title}>
          <h4>Sepet</h4>
        </div>
        <div id={styles.cartItem}>
          <Row className={styles.Row}>
            <Col xs={3}>
              <img src="/images/burger.jpg" alt="" />
            </Col>
            <Col xs={5}>
              <span className={styles.foodName}>Jet Burger</span>
            </Col>
            <Col xs={2}>
              <input type="number" value="1" />
            </Col>
            <Col xs={2}>
              <span className={styles.cancelButton}>
                <Close />
              </span>
            </Col>
          </Row>
        </div>
        <div id={styles.cartItem}>
          <Row className={styles.Row}>
            <Col xs={3}>
              <img src="/images/burger.jpg" alt="" />
            </Col>
            <Col xs={5}>
              <span className={styles.foodName}>Barbekü Soslu Pizza</span>
            </Col>
            <Col xs={2}>
              <input type="number" value="1" />
            </Col>
            <Col xs={2}>
              <span className={styles.cancelButton}>
                <Close />
              </span>
            </Col>
          </Row>
        </div>
        {/* <span className={styles.pricing}>
          <span className={styles.totalText}>Toplam:</span>16.44 ₺
        </span> */}
      </div>
    </div>
  )
}
