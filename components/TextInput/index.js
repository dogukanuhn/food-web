import React from 'react'
import styles from './input.module.css'
export default function index({ ...props }) {
  return <input type="text" {...props} className={styles.textInput} />
}
