import React, { useState } from 'react'
import styles from './cart.module.css'
import { ShoppingCart, Close } from '../icons'
import IconButton from '../IconButton'
import CartItem from '../CartItem'

import Button from '../Button'

import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function index() {
  const [menuState, setMenuState] = useState(false)

  const cartItems = useSelector((state) => state['RootReducer']['cart'])
  const cartItemCount = useSelector(
    (state) => state['RootReducer']['cartTotal']
  )

  console.log(cartItems)
  return (
    <div id={styles.cart}>
      <IconButton
        className={styles.cartButton}
        click={() => setMenuState(!menuState)}
      >
        {menuState ? <Close /> : <ShoppingCart />}
        <div className={styles.count}>
          <span>{cartItemCount}</span>
        </div>
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

        <div className={styles.cartInner}>
          {cartItems.map((x) => {
            return (
              <CartItem
                src={x.image}
                name={x.name}
                count={x.count}
                price={x.sellPrice}
                ingredient={x.ingredients}
                items={x.selectedItems}
              />
            )
          })}
        </div>
        <span className={styles.pricing}>
          <span className={styles.totalText}>Toplam:</span>16.44 ₺
        </span>
      </div>
    </div>
  )
}
