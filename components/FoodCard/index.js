import React from 'react'
import styles from './foodcard.module.css'
import IconButton from '../IconButton'
import { FaCartPlus } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
export default function index() {
  return (
    <div className={styles.main}>
      <img src="/images/burger.jpg" alt="" />
      <div className={styles.detail}>
        <div className={styles.inner}>
          <IconButton className={styles.cartButton}>
            <FaCartPlus />
          </IconButton>
          <h3>Jet Burger</h3>

          <span className={styles.sellPrice}>10.90 ₺</span>

          <StarRatings
            rating={3}
            starDimension={'15'}
            starRatedColor="#f79d16"
            numberOfStars={6}
            name="rating"
          />
        </div>
      </div>
    </div>
  )
}
