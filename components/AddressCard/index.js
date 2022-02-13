import React from 'react'
import cn from 'classnames'
import Card from '../Card'
import styles from './adresscard.module.css'
import { Row, Col } from 'react-bootstrap'
export default function index({
  type,
  icon,
  addres,
  name,
  className,
  isSelected,
  click,
  ...props
}) {
 
  return (
    <Card
      className={cn(styles.addressCard, className, isSelected && styles.active)}
      onClick={click}
      {...props}
    >
      <div className={styles.addressTitle}>
        {icon}
        <h5>{type}</h5>
      </div>

      <div className={styles.adressInner} className={styles.adressInner} className={styles.adressInner} 
            className={styles.adressInner} >
            <div className="addressItem">
              <Row>
                <Col xs={3}>
                  <div className="d-flex">
                    <h6>Alıcı Adı</h6>
                  </div>
                </Col>
                <Col xs={8}>
                  <span>{name}</span>
                </Col>
              </Row>
        </div>
        <div className="addressItem">
          <Row>
            <Col xs={3}>
              <div className="d-flex">
                <h6>Teslim Adresi</h6>
              </div>
            </Col>
            <Col xs={8}>
              <span> {addres}</span>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}
