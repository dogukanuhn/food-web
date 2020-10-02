import React from 'react'
import styles from './textarea.module.css'
import cn from 'classnames'
export default function index({ className, ...props }) {
  return (
    <textarea className={cn(styles.textarea, className)} {...props}></textarea>
  )
}
