import React from 'react'
import { Row } from 'react-bootstrap'
import BrandLogo from '../Logo'
import styles from './header.module.css'
import Button from '../Button'
import HeaderMenu from './HeaderMenu'
export default function Header() {
  return (
    <header id={styles.header} className="container">
      <div className={styles.logoArea}>
        <BrandLogo />
      </div>
      <HeaderMenu>
        <Button href="login">Giriş Yap</Button>
        <Button href="register" color={true}>
          Kayıt Ol
        </Button>
      </HeaderMenu>
    </header>
  )
}
