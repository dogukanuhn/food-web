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
        <React.Fragment>
          <AccountModal type={modalStatus.type} />
          <div
            className="overlay"
            onClick={() => setmodalStatus({ status: false })}
          ></div>
        </React.Fragment>
      )}
      <header id={styles.header} className="container">
        <HeaderMenu>
          <Link href={'/'}>
            <a>Anasayfa</a>
          </Link>
          <Link href={'dashboard'}>
            <a>Dashboard</a>
          </Link>
        </HeaderMenu>
      </header>
    </div>
  )
}
