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
        <Card>
          <Tabs tabs={['Siparişlerim', 'Adreslerim', 'Ayarlarım']}>
            <div>
              <OrderCard />
            </div>
            <div>
              <OrderCard />
            </div>
          </Tabs>
        </Card>
      </div>
    </Layout>
  )
}
