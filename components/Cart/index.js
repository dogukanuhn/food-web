import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import { ShoppingCart, Close } from '../icons'
import IconButton from '../IconButton'
import CartItem from '../CartItem'

import Button from '../Button'

import { useSelector } from 'react-redux'

import { useRouter } from 'next/router'
export default function index() {
  const [menuState, setMenuState] = useState(false)

  const cartItems = useSelector((state) => state['RootReducer']['cart'])
  const cartItemCount = useSelector(
    (state) => state['RootReducer']['cartTotalItem']
  )
  const router = useRouter()
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

  const showCartItemCount = () => {
    return (
      cartItemCount > 0 && (
        <div>
          <Button
            className={styles.paymentButton}
            onClick={() => {
              router.push('sepet')
            }}
          >
            Öde
          </Button>
        </div>
      )
    )
  }

  const showCartItems = () => {
    return cartItems.map((x, i) => {
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
    })
  }
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
          {showCartItemCount()}
        </div>

        <div className={styles.cartInner}>{showCartItems()}</div>
        <span className={styles.pricing}>
          <span className={styles.totalText}>Toplam:</span>
          {totalPrice} ₺
        </span>
      </div>
    </div>
  )
}
