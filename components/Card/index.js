import React from 'react'
import styles from './card.module.css'
import cn from 'classnames'
export default function index({ children, className, ...props }) {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  )
}
