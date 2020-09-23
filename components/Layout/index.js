import Header from '../Header'
import Footer from '../Footer'
import FoodModal from '../FoodModal'
import AccountModal from '../AccountModal'

import Cart from '../Cart'
import { useDispatch, useSelector } from 'react-redux'
import styles from './layout.module.css'
export default function layout({ children }) {
  const toggleModal = useSelector(
    (state) => state['FoodReducer']['modalStatus']
  )
  const accountModal = useSelector(
    (state) => state['RootReducer']['accountModal']['status']
  )
  const dispatch = useDispatch()

  return (
    <div id={styles.layout}>
      {(toggleModal || accountModal) && (
        <div
          onClick={() => {
            if (toggleModal) {
              dispatch({ type: 'ToggleModal', action: null })
            } else {
              dispatch({
                type: 'AccountModal',
                action: { status: false }
              })
            }
          }}
          className={styles.overlay}
        ></div>
      )}
      {toggleModal && <FoodModal />}
      {accountModal && <AccountModal />}

      <Header></Header>
      <main>{children}</main>
      <Cart />
      <Footer></Footer>
    </div>
  )
}
