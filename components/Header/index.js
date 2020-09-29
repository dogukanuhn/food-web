import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import BrandLogo from '../Logo'
import styles from './header.module.css'
import Button from '../Button'
import HeaderMenu from './HeaderMenu'
import AccountModal from '../AccountModal'

import Link from 'next/link'
import { useDispatch } from 'react-redux'
export default function Header() {
  // const dispatch = useDispatch()
  const [modalStatus, setmodalStatus] = useState({ status: false, type: 0 })
  return (
    <div>
      {modalStatus.status && (
        <div>
          <AccountModal type={modalStatus.type} />{' '}
          <div
            className="overlay"
            onClick={() => setmodalStatus({ status: false })}
          ></div>
        </div>
      )}
      <header id={styles.header} className="container">
        <div className={styles.logoArea}>
          <Link href="/">
            <a>
              <img src="/images/logo.png" />
            </a>
          </Link>
        </div>
        <HeaderMenu>
          <Button onClick={() => setmodalStatus({ status: true, type: 0 })}>
            Giriş Yap
          </Button>
          <Button
            onClick={() => setmodalStatus({ status: true, type: 1 })}
            color={true}
          >
            Kayıt Ol
          </Button>
        </HeaderMenu>
      </header>
    </div>
  )
}
