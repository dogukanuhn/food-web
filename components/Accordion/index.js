import React, { useState } from 'react'
import styles from './accordion.module.css'
import cn from 'classnames'
import Card from '../Card'
import IconButton from '../IconButton'
import { Arrowbottom } from '../../components/icons'
import propTypes from 'prop-types'
export default function index({ head, className, children, ...props }) {
  const [toggle, setToggle] = useState(true)
  return (
    <div
      className={cn(styles.accordion, toggle && styles.active, className)}
      {...props}
    >
      <Card className={styles.card} onClick={() => setToggle(!toggle)}>
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

index.propTypes = {
  head: propTypes.string
}
