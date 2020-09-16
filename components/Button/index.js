import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'
import Link from 'next/link'
function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

export default function index({
  children,
  color = false,
  className,
  ...props
}) {
  const Comp = props.href ? LinkButton : BaseButton

  return (
    <Comp
      className={cn(styles.button, color && styles.orange, className)}
      {...props}
    >
      {children}
    </Comp>
  )
}
