import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'
ChartJS.register(ArcElement, Tooltip, Legend)

const SALE_STATUS = {
  labels: ['Başarılı', 'Başarısız'],
  datasets:[]
}

const FAILED_REASON = {
  datasets:[]
}

export default function index() {
  const [saleStatusState, setSaleStatus] = useState(SALE_STATUS)
  const [failedReasonState, setfailedReason] = useState(FAILED_REASON)


  const setSaleStatusChart = ({saleStatus}) => {
    const chartData = {
      label: '# of Votes',
      data: [saleStatus.success, saleStatus.suspend],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderWidth: 1
    }

    setSaleStatus({
      ...saleStatusState,
      datasets: [chartData]
    })
  }

  const setFailedReasonChart = ({failedReason}) => {
    const chartData = {
      label: '# of Votes',
      data: [failedReason.notEnoughStock, failedReason.notEnoughBalance],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderWidth: 1
    }

    setfailedReason({
      labels:Object.keys(failedReason),
      datasets: [chartData]
    })
  }

  useEffect(() => {

    axios.get('https://localhost:7214/api/dashboard').then(({ data }) => {
      setSaleStatusChart(data)
      setFailedReasonChart(data)
    })

  }, [])

  return (
    <Layout>
      <div className="container">
        <h1>Sipariş Geçmişi</h1>
        <div className="row">
          <div className="col-6">
            <Card>
              <h2>Yapılan Satışların Durumu</h2>
              <div className={styles.chartWrapper}>
                <div className={styles.chart}>
                  <Pie data={saleStatusState} />
                </div>
              </div>
            </Card>
          </div>
          <div className="col-6">
          <Card>
              <h2>Yapılan Satışların Durumu</h2>
              <div className={styles.chartWrapper}>
                <div className={styles.chart}>
                  <Pie data={failedReasonState} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
