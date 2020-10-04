import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import OrderCard from '../../components/OrderCard'
import Tabs from '../../components/Tabs'
import Accordion from '../../components/Accordion'

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
          <div>
            <OrderCard />
          </div>
        </Tabs>
      </div>
    </Layout>
  )
}
