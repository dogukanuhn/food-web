import React from 'react'
import Link from 'next/link'
import styles from './categorybutton.module.css'
import cn from 'classnames'
export default function index({ icon, text, href, className, ...props }) {
  return (
    <Link href={href}>
      <a className={cn(styles.categoryButton, className)} {...props}>
        <span>{icon}</span>
        {text}
      </a>
    </Link>
  )
}
