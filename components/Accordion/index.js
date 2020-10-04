import React, { useState } from 'react'
import styles from './accordion.module.css'
import cn from 'classnames'
import Card from '../Card'
import IconButton from '../IconButton'
import { CreditCard, Arrowbottom } from '../../components/icons'

export default function index({ head, className, children, ...props }) {
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className={cn(styles.accordion, toggle && styles.active, className)}
      onClick={() => setToggle(!toggle)}
      {...props}
    >
      <Card className={styles.card}>
        <div className={styles.addressTitle}>
          {head}
          <IconButton className={styles.arrow}>
            <Arrowbottom />
          </IconButton>
        </div>
      </Card>
      <div className={styles.paymentContent}>{children}</div>
    </div>
  )
}
