import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './campaign.module.css'
import Banner from '../Banner'
import { BannerType } from '../../Enums/BannerType'
export default function index() {
  return (
    <div id={styles.campaign}>
      <div className="container">
        <Row>
          <Col xs={4}>
            <Banner src="/images/banner.jpg" banner={BannerType.SUB}></Banner>
          </Col>
          <Col xs={4}>
            <Banner src="/images/banner.jpg" banner={BannerType.SUB}></Banner>
          </Col>
          <Col xs={4}>
            <Banner src="/images/banner.jpg" banner={BannerType.SUB}></Banner>
          </Col>
        </Row>
      </div>
    </div>
  )
}
