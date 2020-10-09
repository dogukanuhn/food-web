import React from 'react'
import styles from './content.module.css'
export default function index({ children }) {
  return <div className={styles.content}>{children}</div>
}
