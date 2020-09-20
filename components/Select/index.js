import React from 'react'
import styles from './select.module.css'
export default function index() {
  return (
    <select name="cars" className={styles.select}>
      <option value="volvo">1 porsiyon</option>
      <option value="saab">1.5 porsiyon (+10.00 ₺)</option>
    </select>
  )
}
