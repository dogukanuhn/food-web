import React from 'react'
import cn from 'classnames'
import styles from './iconbutton.module.css'

export default function index({ className, children, event = null }) {
  return (
    <span className={cn(styles.button, className)} onClick={event}>
      {children}
    </span>
  )
}
