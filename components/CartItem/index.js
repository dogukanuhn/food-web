import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Close } from '../icons'
import styles from './cartitem.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

export default function index({
  id,
  src,
  name,
  count,
  price,
  ingredient,
  items
}) {
  // Select your input element.

  const dispatch = useDispatch()

  const changeCount = (e) => {
    dispatch({
      type: 'ChangeFoodCount',
      action: { id: id, count: e.target.value }
    })
  }

  return (
    <div id={styles.cartItem}>
      <Row className={styles.Row}>
        <Col xs={2} className="pr-0">
          <img src={src} alt="" />
        </Col>
        <Col xs={5}>
          <span className={styles.foodName}>{name}</span>
          {ingredient && (
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
          )}
          {items && (
            <div>
              <span className={styles.canceledItems}>
                {Object.values(items).map((x) => {
                  return `'${x}' `
                })}
              </span>
            </div>
          )}
        </Col>
        <Col xs={3} className="p-0">
          <div className={styles.numberArea}>
            <input
              min="0"
              type="number"
              value={count}
              onInput={(e) => {
                e.target.value =
                  !!e.target.value && Math.abs(e.target.value) >= 0
                    ? Math.abs(e.target.value)
                    : null
              }}
              onChange={changeCount}
            />
            <span className={styles.price}>
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
  src: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
  ingredient: PropTypes.array,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
