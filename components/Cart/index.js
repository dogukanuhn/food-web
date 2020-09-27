import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import { ShoppingCart, Close } from '../icons'
import IconButton from '../IconButton'
import CartItem from '../CartItem'

import Button from '../Button'

import { useSelector } from 'react-redux'
import { FaCommentsDollar } from 'react-icons/fa'

export default function index() {
  const [menuState, setMenuState] = useState(false)

  const cartItems = useSelector((state) => state['RootReducer']['cart'])
  const cartItemCount = useSelector(
    (state) => state['RootReducer']['cartTotalItem']
  )

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    var total =
      cartItemCount > 0
        ? parseFloat(
            cartItems.reduce((a, b) => a + b.sellPrice * b.count, 0)
          ).toFixed(2)
        : 0

    setTotalPrice(total)
  }, [cartItems])

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
          {cartItemCount > 0 && (
            <div>
              <Button className={styles.paymentButton}>Öde</Button>
            </div>
          )}
        </div>

        <div className={styles.cartInner}>
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
              />
            )
          })}
        </div>
        <span className={styles.pricing}>
          <span className={styles.totalText}>Toplam:</span>
          {totalPrice} ₺
        </span>
      </div>
    </div>
  )
}
