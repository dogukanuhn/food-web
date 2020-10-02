import React from 'react'
import styles from './card.module.css'
import cn from 'classnames'
export default function index({ children, className }) {
  return <div className={cn(styles.card, className)}>{children}</div>
}
