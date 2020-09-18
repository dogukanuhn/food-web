import React from 'react'
import cn from 'classnames'
import styles from './iconbutton.module.css'

export default function index({ className, children, click }) {
  return (
    <span className={cn(styles.button, className)} onClick={click}>
      {children}
    </span>
  )
}
