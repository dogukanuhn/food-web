import React from 'react'
import styles from './textarea.module.css'
export default function index({ ...props }) {
  return <textarea className={styles.textarea} {...props}></textarea>
}
