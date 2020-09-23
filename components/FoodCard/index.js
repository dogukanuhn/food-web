import React from 'react'
import styles from './foodcard.module.css'
import IconButton from '../IconButton'
import { FaCartPlus } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import cn from 'classnames'
import { useDispatch } from 'react-redux'

export default function index({ foodData, className }) {
  const dispatch = useDispatch()
  return (
    <div className={cn(styles.main, className)}>
      <img src={foodData.image} alt="" />
      <div className={styles.detail}>
        <div className={styles.inner}>
          <IconButton
            className={styles.cartButton}
            click={() => dispatch({ type: 'ToggleModal', action: foodData })}
          >
            <FaCartPlus />
          </IconButton>
          <h4>{foodData.name}</h4>

          <span className={styles.sellPrice}>
            {foodData.discount && (
              <span className={styles.basePrice}>{foodData.basePrice} ₺</span>
            )}
            {foodData.sellPrice} ₺
          </span>

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
