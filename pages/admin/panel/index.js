import React from 'react'
import Link from 'next/link'
import styles from './dashboard.module.css'
import Layout from '../../../adminComponents/layout'
import TotalCard from '../../../adminComponents/TotalCard'

import Card from '../../../components/Card'

import cn from 'classnames'
import { Col, Row } from 'react-bootstrap'
export default function index() {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div>
          <Row>
            {[
              { class: styles.user, title: 'Müşteri Sayısı' },
              { class: styles.shipment, title: 'Sipariş Sayısı' },
              { class: styles.food, title: 'Yemek Sayısı' },
              { class: styles.newOrder, title: 'Yeni Sipariş' }
            ].map((x) => (
              <Col xs={3}>
                <TotalCard
                  title={x.title}
                  count="15"
                  link=""
                  className={x.class}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Layout>
  )
}
