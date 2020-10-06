import React from 'react'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'
import Tabs from '../../components/Tabs'
import MyAdressTab from '../../components/MyAdressTab'
import { Col, Row } from 'react-bootstrap'

export default function index() {
  return (
    <Layout>
      <div className="container">
        <h1>Hesabım</h1>

        <Tabs tabs={['Siparişlerim', 'Adreslerim', 'Ayarlarım']}>
          <div>
            <OrderCard
              orderDetail={{
                orderDate: '20.05.2020 15.23',
                price: 31.0,
                paymentType: 2
              }}
            />
          </div>
          <MyAdressTab />
        </Tabs>
      </div>
    </Layout>
  )
}
