import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import CartItem from '../../components/CartItem'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import styles from './cartpage.module.css'
export default function index() {
  const cartItems = useSelector((state) => state['RootReducer']['cart'])
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
      <div className="container">
        <h1>Sepet</h1>
        <div className={styles.cart}>
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
      </div>
    </Layout>
  )
}
