import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import CategoryList from '../../../components/CategoryList'
import FoodCard from '../../../components/FoodCard'
import styles from './menuler.module.css'
export default function index() {
  return (
    <Layout>
      <div id={styles.menuler}>
        <CategoryList active={'burger'}></CategoryList>
        <div className="container">
          <h2>Burger Menülerimiz</h2>
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
            <Col xs={3}>
              <FoodCard></FoodCard>
            </Col>
            <Col xs={3}>
              <FoodCard></FoodCard>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}
