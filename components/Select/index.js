import React from 'react'
import styles from './select.module.css'
export default function index({ data }) {
  return (
    <select name="cars" className={styles.select}>
      {data.map((x) => {
        return <option value="volvo">{x}</option>
      })}
    </select>
  )
}
