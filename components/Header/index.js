import React from 'react'
import { Row } from 'react-bootstrap'
import BrandLogo from '../Logo'
import styles from './header.module.css'
import Button from '../Button'
import HeaderMenu from './HeaderMenu'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
export default function Header() {
  const dispatch = useDispatch()
  return (
    <header id={styles.header} className="container">
      <div className={styles.logoArea}>
        <Link href="/">
          <a>
            <BrandLogo />
          </a>
        </Link>
      </div>
      <HeaderMenu>
        <Button
          onClick={() =>
            dispatch({
              type: 'AccountModal',
              action: { status: true, type: 0 }
            })
          }
        >
          Giriş Yap
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: 'AccountModal',
              action: { status: true, type: 1 }
            })
          }
          color={true}
        >
          Kayıt Ol
        </Button>
      </HeaderMenu>
    </header>
  )
}
