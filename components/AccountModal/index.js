import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './account.module.css'
import TextInput from '../TextInput'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
export default function index() {
  const tab = useSelector(
    (state) => state['RootReducer']['accountModal']['type']
  )
  const dispatch = useDispatch()
  console.log(tab)
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <div className={styles.modalTop}>
          <h2>{tab === 0 ? 'Giriş Yap' : 'Kayıt Ol'}</h2>
        </div>

        <div className={styles.modalContent}>
          {tab === 0 && (
            <div>
              <form>
                <TextInput placeholder="E-Posta Adresi" />
                <TextInput placeholder="Parola" />

                <Button>Giriş Yap</Button>
              </form>
              <Button
                onClick={() =>
                  dispatch({
                    type: 'AccountModal',
                    action: { status: true, type: 1 }
                  })
                }
              >
                {' '}
                Kayıt Ol
              </Button>
            </div>
          )}
          {tab === 1 && (
            <div>
              <form>
                <TextInput placeholder="Adı" />
                <TextInput placeholder="Soyadı" />
                <TextInput placeholder="E-Posta Adresi" />
                <TextInput placeholder="Parola" />
                <TextInput placeholder="Parola Tekrar" />
                <Button>Kayıt Ol</Button>
              </form>
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
            </div>
          )}
        </div>
        <div className={styles.modalFooter}></div>
      </div>
    </div>
  )
}
