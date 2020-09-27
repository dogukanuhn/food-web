import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Select from '../Select'
import ToggleButton from '../ToggleButton'
import Button from '../Button'

import styles from './foodmodal.module.css'
export default function index({ data, closeModal }) {
  // const foodData = useSelector(
  //   (state) => state['FoodReducer']['modalFoodDetail']
  // )
  const [foodData, setfoodData] = useState(data)
  var selectedItems = []

  var addToCart = () => {
    foodData['count'] = 1
    foodData['selectedItems'] = selectedItems

    dispatch({ type: 'AddToCart', action: foodData })
    closeModal()
  }

  const dispatch = useDispatch()
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <div className={styles.modalTop}>
          <h3>{foodData.name}</h3>
          <span className={styles.sellPrice}>
            {foodData.discount && (
              <span className={styles.basePrice}>{foodData.basePrice} ₺</span>
            )}
            {foodData.sellPrice} ₺
          </span>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.foodImage}>
            <img src={foodData.image} />
          </div>
          <div className={styles.foodDetail}>
            <Row>
              <Col xs={2}>
                <h6>İçindekiler</h6>
              </Col>
              <Col xs={9}>
                <span>{foodData.ingredientsText}</span>
              </Col>
            </Row>
          </div>
          {foodData.selectList &&
            foodData.selectList.map((x, i) => {
              return (
                <div className={styles.foodDetail}>
                  <Row>
                    <Col xs={2}>
                      <h6>{x.name}</h6>
                    </Col>
                    <Col xs={9}>
                      <Select value={selectedItems[i]} data={x.data} />
                    </Col>
                  </Row>
                </div>
              )
            })}
          {foodData.ingredients && (
            <div className={styles.foodDetail}>
              <Row>
                <Col xs={2}>
                  <div className="d-flex">
                    <h6>Malzemeler</h6>
                  </div>
                </Col>
                <Col xs={9}>
                  {console.log(foodData)}
                  {foodData.ingredients.map((x, i) => {
                    return (
                      <ToggleButton
                        className={!x.status && styles.noMaterial}
                        click={() => {
                          setfoodData({
                            ...foodData,
                            ingredients: foodData.ingredients.map((y, z) =>
                              i === z ? { ...y, status: !x.status } : y
                            )
                          })
                        }}
                      >
                        {x.name}
                      </ToggleButton>
                    )
                  })}
                </Col>
              </Row>
            </div>
          )}
        </div>
        <div className={styles.modalFooter}>
          <Button className={styles.addCart} onClick={addToCart}>
            SEPETE EKLE
          </Button>
        </div>
      </div>
    </div>
  )
}
