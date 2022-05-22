import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'
import cn from 'classnames'
import Accordion from '../../components/Accordion'
ChartJS.register(ArcElement, Tooltip, Legend)

const SALE_STATUS = {
  labels: ['Başarılı', 'Başarısız'],
  datasets: []
}

const FAILED_REASON = {
  datasets: []
}

export default function index() {
  const [saleStatusState, setSaleStatus] = useState(SALE_STATUS)
  const [failedReasonState, setfailedReason] = useState(FAILED_REASON)
  const [lastFiveOrder, setLastFiveOrder] = useState([])

  const setSaleStatusChart = ({ saleStatus }) => {
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

  const setFailedReasonChart = ({ failedReason }) => {
    const chartData = {
      label: '# of Votes',
      data: [failedReason.notEnoughStock, failedReason.notEnoughBalance],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderWidth: 1
    }

    setfailedReason({
      labels: Object.keys(failedReason),
      datasets: [chartData]
    })
  }

  useEffect(() => {
    axios.get('https://localhost:7214/api/dashboard').then(({ data }) => {
      setSaleStatusChart(data)
      setFailedReasonChart(data)
      setLastFiveOrder(
        data.orders
          .sort((x) => x.createdDate)
          .reverse()
          .splice(0, 5)
      )
    })
  }, [])

  return (
    <Layout>
      <div className="container">
        <h1>Sipariş Geçmişi</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <Card>
              <h2>Yapılan Satışların Durumu</h2>
              <div className={styles.chartWrapper}>
                <div className={styles.chart}>
                  <Pie data={saleStatusState} />
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-6">
            <Card>
              <h2>Başarısız Nedenleri</h2>
              <div className={styles.chartWrapper}>
                <div className={styles.chart}>
                  <Pie data={failedReasonState} />
                </div>
              </div>
            </Card>
          </div>
          <div className=" mt-5 col-12">
            <h2>Son 5 Sipariş</h2>
            <div>
              {lastFiveOrder.map((x) => (
                <Accordion
                  key={x.orderId}
                  headerClass={x.status === 1 ? styles.green : styles.red}
                  head={`Sipariş numarası: ${x.orderId}`}
                >
                  <div className="row">
                    <div className="col-6">
                      <h3>Adres Bilgileri</h3>
                      <div className={styles.address}>
                        <span>İl:{x.address.line}</span>
                        <span>İlçe:{x.address.province}</span>
                        <span>Mahalle:{x.address.district}</span>
                      </div>
                    </div>
                    <div className="col-6"></div>
                  </div>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
