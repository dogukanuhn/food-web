import React from 'react'
import cn from 'classnames'
import styles from './iconbutton.module.css'

export default function index({ children, event = null }) {
  return (
    <span className={styles.button} onClick={event}>
      {children}
    </span>
  )
}
