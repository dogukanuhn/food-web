import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Button from '../../components/Button'

import styles from './account.module.css'
import { useState } from 'react'
export default function index() {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <Layout>
      <div className="container">
        <h1>Hesabım</h1>
        <Card>
          <div className={styles.tabs}>
            {['Siparişlerim', 'Adreslerim', 'Ayarlarım'].map((x, i) => {
              return (
                <Button
                  color={selectedTab === i && true}
                  onClick={() => setSelectedTab(i)}
                >
                  {x}
                </Button>
              )
            })}
          </div>
          <div className={styles.content}>
            <div>A</div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
