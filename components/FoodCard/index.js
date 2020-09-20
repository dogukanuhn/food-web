import React from 'react'
import styles from './foodcard.module.css'
import IconButton from '../IconButton'
import { FaCartPlus } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import cn from 'classnames'
export default function index({ className }) {
  return (
    <div className={cn(styles.main, className)}>
      <img src="/images/burger.jpg" alt="" />
      <div className={styles.detail}>
        <div className={styles.inner}>
          <IconButton className={styles.cartButton}>
            <FaCartPlus />
          </IconButton>
          <h4>Jet Burger</h4>

          <span className={styles.sellPrice}>10.90 ₺</span>

          <StarRatings
            rating={3}
            starDimension={'12'}
            starRatedColor="#f79d16"
            numberOfStars={6}
            name="rating"
            starRatedColor={'#ff5e00'}
            starSpacing={'2px'}
          />
        </div>
      </div>
    </div>
  )
}
