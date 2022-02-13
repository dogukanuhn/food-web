import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Close } from '../icons'
import styles from './cartitem.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import { useRouter } from 'next/router'
export default function index({
  id,
  src,
  name,
  count,
  price,
  ingredient,
  items,
  priceClass
}) {
  // Select your input element.
  const router = useRouter()
  const dispatch = useDispatch()

  const changeCount = (e) => {
    dispatch({
      type: 'ChangeFoodCount',
      action: { id: id, count: parseInt(e.target.value) }
    })
  }

  const showIngredients = () => {
    return (
      ingredient && (
        <div>
          <span className={styles.canceledItems}>
            {ingredient.map((x) => {
              return !x.status && `'${x.name}' `
            })}
          </span>
          {ingredient.some((x) => x.status === false) && (
            <span className={styles.canceledItems}>yok</span>
          )}
        </div>
      )
    )
  }

  const showSelectedItems = () => {
    return (
      items && (
        <div>
          <span className={styles.canceledItems}>
            {Object.values(items).map((x) => {
              return `'${x}' `
            })}
          </span>
        </div>
      )
    )
  }

  const numberValidation = (e) => {
    return (e.target.value =
      !!e.target.value && Math.abs(e.target.value) >= 0
        ? Math.abs(e.target.value)
        : 0)
  }
  return (
    <div id={styles.cartItem}>
      <Row className={styles.Row}>
        <Col xs={2} className="pr-0">
          <img src={`/images/${name.toLowerCase()}.jpg`} alt="" />
        </Col>
        <Col xs={router.pathname === '/sepet' ? 4 : 5}>
          <span className={styles.foodName}>{name}</span>
          {showIngredients()}
          {showSelectedItems()}
        </Col>
        <Col xs={router.pathname === '/sepet' ? 4 : 3} className="p-0">
          <div className={styles.numberArea}>
            <span className={cn(styles.price, priceClass)}>
              {parseFloat(price).toFixed(2)} ₺
            </span>
          </div>
        </Col>
        <Col xs={2}>
          <span
            className={styles.cancelButton}
            onClick={() => {
              dispatch({ type: 'RemoveFromCart', action: id })
            }}
          >
            <Close />
          </span>
        </Col>
      </Row>
    </div>
  )
}

index.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
  ingredient: PropTypes.array,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
