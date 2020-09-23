import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Select from '../Select'
import ToggleButton from '../ToggleButton'
import Button from '../Button'

import styles from './foodmodal.module.css'
export default function index() {
  const foodData = useSelector(
    (state) => state['FoodReducer']['modalFoodDetail']
  )

  const dispatch = useDispatch()
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <div className={styles.modalTop}>
          <h3>{foodData.name}</h3>
          <span>{foodData.sellPrice} ₺</span>
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
            foodData.selectList.map((x) => {
              return (
                <div className={styles.foodDetail}>
                  <Row>
                    <Col xs={2}>
                      <h6>{x.name}</h6>
                    </Col>
                    <Col xs={9}>
                      <Select data={x.data} />
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
                  {foodData.ingredients.map((x, i) => {
                    return (
                      <ToggleButton
                        className={!x.status && styles.noMaterial}
                        click={() => {
                          x.status = !x.status
                          dispatch({
                            type: 'ChangeIngredientStatus',
                            action: { id: i, value: x.status }
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
          <Button className={styles.addCart}>SEPETE EKLE</Button>
        </div>
      </div>
    </div>
  )
}
