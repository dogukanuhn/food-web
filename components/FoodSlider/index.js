import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FoodCard from '../FoodCard'
import styles from './foodslider.module.css'
export default function index() {
  return (
    <section id={styles.foodSlider}>
      <div className="container">
        <Row>
          <Col xs={3}>
            <FoodCard></FoodCard>
          </Col>
          <Col xs={3}>
            <FoodCard></FoodCard>
          </Col>
          <Col xs={3}>
            <FoodCard></FoodCard>
          </Col>
          <Col xs={3}>
            <FoodCard></FoodCard>
          </Col>
        </Row>
      </div>
    </section>
  )
}
