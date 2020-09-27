import React, { useEffect } from 'react'
import styles from './select.module.css'
export default function index({ data, selectOnChange, ...props }) {
  useEffect(() => {
    var e = {
      target: {
        value: null
      }
    }
    e.target.value = data[0]
    selectOnChange(e)
  }, [data])
  return (
    <select
      className={styles.select}
      onChange={selectOnChange}
      defaultValue={data[0]}
      {...props}
    >
      {data.map((x, i) => {
        return <option value={x}>{x}</option>
      })}
    </select>
  )
}
