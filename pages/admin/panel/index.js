import React from 'react'
import styles from './dashboard.module.css'
import Layout from '../../../adminComponents/layout'
import TotalCard from '../../../adminComponents/TotalCard'
import Card from '../../../components/Card'
import { Col, Row } from 'react-bootstrap'
export default function index() {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div>
          <Row>
            {[
              { class: styles.newOrder, title: 'Yeni Sipariş' },
              { class: styles.user, title: 'Müşteri Sayısı' },
              { class: styles.shipment, title: 'Sipariş Sayısı' },
              { class: styles.food, title: 'Yemek Sayısı' }
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
        <div className={styles.distToDistrict}>
          <Row>
            <Col xs={6}>
              <h3>Mahalleye Göre Dağılım</h3>
              <Card>
                <div className={styles.tableTitle}>
                  <span>Mahalle</span>
                  <span>Sipariş</span>
                </div>
                <div className={styles.tableContent}>
                  {[
                    { district: 'Bahçelievler', count: 10 },
                    { district: 'Bakırköy', count: 15 }
                  ].map((x) => (
                    <div className={styles.tableItem}>
                      <span>{x.district}</span>
                      <span>{x.count}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={6}>
              <h3>En Çok Satılan</h3>
              <Card>
                <div className={styles.tableTitle}>
                  <span>Mahalle</span>
                  <span>Sipariş</span>
                </div>
                <div className={styles.tableContent}>
                  {[
                    { district: 'Bahçelievler', count: 10 },
                    { district: 'Bakırköy', count: 15 }
                  ].map((x) => (
                    <div className={styles.tableItem}>
                      <span>{x.district}</span>
                      <span>{x.count}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}
