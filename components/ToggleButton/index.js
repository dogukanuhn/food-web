import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'
export default function index({ className, children, click }) {
  return (
    <span className={cn(styles.toggleButton, className)} onClick={click}>
      {children}
    </span>
  )
}
