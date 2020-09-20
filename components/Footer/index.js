import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LogoText from '../LogoText'
import styles from './footer.module.css'
import { FacebookBrands, İnstagramBrands } from '../icons'
export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className="container">
        <Row>
          <Col xs={3}>
            <div className={styles.brand}>
              <LogoText />
            </div>
            <div className={styles.copyright}>Copright 2020 -- Nuans </div>
            <div className={styles.social}>
              <a href="">
                <FacebookBrands />
              </a>
              <a href="">
                <İnstagramBrands />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className={styles.menu}>
              <ul>
                <li>
                  <a href="">Hakkımızda</a>
                </li>
                <li>
                  {' '}
                  <a href="">İletişim</a>
                </li>
                <li>
                  {' '}
                  <a href="">S.S.S.</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={3}>
            <div className={styles.menu}>
              <ul>
                <li>
                  <a href="">Kullanıcı Sözleşmesi</a>
                </li>
                <li>
                  {' '}
                  <a href="">Aydınlatma Metni</a>
                </li>
                <li>
                  {' '}
                  <a href="">Bilgi Toplumu Hizmetleri</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  )
}
