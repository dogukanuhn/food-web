import React from 'react'
import styles from './select.module.css'
export default function index({ data, ...props }) {
  return (
    <select name="cars" className={styles.select} {...props}>
      {data.map((x) => {
        return <option value={x}>{x}</option>
      })}
    </select>
  )
}
