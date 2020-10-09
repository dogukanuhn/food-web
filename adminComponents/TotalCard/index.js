import React from 'react'
import Link from 'next/link'
import Card from './../../components/Card'
import styles from './totalcard.module.css'
import cn from 'classnames'
export default function index({ count, link, title, className, ...props }) {
  return (
    <Card className={cn(className, styles.totalCard)}>
      <div className={styles.cardContent}>
        <h5>{title}</h5>
        <div className={styles.count}>
          <h4>{count}</h4>
        </div>
      </div>
      <div className={styles.linkArea}>
        <Link href={link}>
          <a>Görüntüle</a>
        </Link>
      </div>
    </Card>
  )
}
