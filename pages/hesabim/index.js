import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import OrderCard from '../../components/OrderCard'
import Tabs from '../../components/Tabs'

export default function index() {
  return (
    <Layout>
      <div className="container">
        <h1>Hesabım</h1>

        <Tabs tabs={['Siparişlerim', 'Adreslerim', 'Ayarlarım']}>
          <Card>
            <OrderCard />
          </Card>
          <Card>
            <OrderCard />
          </Card>
        </Tabs>
      </div>
    </Layout>
  )
}
