import React, { useState } from 'react'
import styles from './cart.module.css'
import { ShoppingCart, Close } from '../icons'
import IconButton from '../IconButton'
import CartItem from '../CartItem'

import Button from '../Button'

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
          <div>
            <Button className={styles.paymentButton}>Öde</Button>
          </div>
        </div>
        <CartItem
          src="/images/burger.jpg"
          name="Jet Pizza"
          count="1"
          price="14.00"
        />
        <CartItem
          src="/images/burger.jpg"
          name="Barbekü soslu Tavuk Pizza"
          count="1"
          price="14.00"
        />
        <span className={styles.pricing}>
          <span className={styles.totalText}>Toplam:</span>16.44 ₺
        </span>
      </div>
    </div>
  )
}
