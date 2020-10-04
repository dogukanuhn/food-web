import React from 'react'
import styles from './accordion.module.css'
import cn from 'classnames'
import Card from '../Card'
import IconButton from '../IconButton'
import { CreditCard, Arrowbottom } from '../../components/icons'

export default function index({ title, children, isOpen, ...props }) {
  return (
    <div className={cn(styles.accordion, isOpen && styles.active)} {...props}>
      <Card className={styles.card}>
        <div className={styles.addressTitle}>
          <div className="d-flex">
            <CreditCard />
            <h5>{title}</h5>
          </div>
          <IconButton className={styles.arrow}>
            <Arrowbottom />
          </IconButton>
        </div>
      </Card>
      <div className={styles.paymentContent}>{children}</div>
    </div>
  )
}
