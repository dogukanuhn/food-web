import React from 'react'
import styles from './menu.module.css'
export default function index({ children }) {
  return <div className={styles.menu}>{children}</div>
}
