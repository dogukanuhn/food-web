import React from 'react'
import Link from 'next/link'
import styles from './categorybutton.module.css'
export default function index({ icon, text, href, children, ...props }) {
  return (
    <Link href={href}>
      <a className={styles.categoryButton} {...props}>
        <span>{icon}</span>
        {text}
      </a>
    </Link>
  )
}
