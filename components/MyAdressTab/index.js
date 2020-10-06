import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from '../Card'
import TextInput from '../TextInput'

import Button from '../Button'
import TextArea from '../TextArea'

import styles from './tab.module.css'
export default function index() {
  return (
    <div className={styles.addressTab}>
      <Row>
        <Col xs={6}>
          <h3>Ev Adresim</h3>
          <Card>
            <TextInput required placeholder="Teslim Alacak Kişi" />
          </Card>
          <Card>
            <TextArea className="adressText" placeholder="Teslim Alacak Kişi" />
          </Card>
        </Col>
        <Col xs={6}>
          <h3>İş Adresim</h3>
          <Card>
            <TextInput required placeholder="Teslim Alacak Kişi" />
          </Card>
          <Card>
            <TextArea className="adressText" placeholder="Teslim Alacak Kişi" />
          </Card>
        </Col>
        <Col xs={12}>
          <div className={styles.saveButton}>
            <Button color={true}>Kaydet</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
