import React from 'react'
import styles from './button.module.css'
export default function index({ children, click }) {
  return (
    <span className={styles.toggleButton} onClick={click}>
      {children}
    </span>
  )
}
