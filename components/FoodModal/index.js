import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Select from '../Select'
import ToggleButton from '../ToggleButton'

import styles from './foodmodal.module.css'
export default function index() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <div className={styles.modalTop}>
          <h3>Jet Burger</h3>
          <span>16.00 ₺</span>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.foodDetail}>
            <Row>
              <Col xs={2}>
                <h6>İçindekiler</h6>
              </Col>
              <Col xs={9}>
                <span>
                  Kuru soğan, buğday unu, tam buğday unu. Sarımsak, tam yağlı
                  yoğurt, pul biber, tereyağı, dana kıyma, karabiber
                </span>
              </Col>
            </Row>
          </div>
          <div className={styles.foodDetail}>
            <Row>
              <Col xs={2}>
                <h6>Porsiyon</h6>
              </Col>
              <Col xs={9}>
                <Select />
              </Col>
            </Row>
          </div>
          <div className={styles.foodDetail}>
            <Row>
              <Col xs={2}>
                <div className="d-flex">
                  <h6>Malzemeler</h6>
                </div>
              </Col>
              <Col xs={9}>
                <ToggleButton>Sucuk</ToggleButton>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}
