import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Select from '../Select'
import ToggleButton from '../ToggleButton'
import Button from '../Button'
import AOS from 'aos'
import styles from './foodmodal.module.css'
export default function index({ data, closeModal }) {
  const [foodData, setfoodData] = useState(data)

  var addToCart = () => {
    foodData['count'] = 1
    dispatch({ type: 'AddToCart', action: foodData })
    closeModal()
  }

  useEffect(() => {
    AOS.init()
  })

  const handleSelect = (e, i) => {
    setfoodData({
      ...foodData,
      selectedItems: { ...foodData.selectedItems, [i]: e.target.value }
    })
  }

  const dispatch = useDispatch()
  return (
    <div className={styles.modal} data-aos="fade-up" data-aos-duration="500">
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
                      <Select
                        selectOnChange={(e) => {
                          handleSelect(e, i)
                        }}
                        data={x.data}
                      />
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
