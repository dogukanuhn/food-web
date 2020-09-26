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

  const dispatch = useDispatch()

  return (
    <div id={styles.layout}>
      {toggleModal && (
        <div
          onClick={() => {
            dispatch({ type: 'ToggleModal', action: null })
          }}
          className="overlay"
        ></div>
      )}
      {toggleModal && <FoodModal />}

      <Header></Header>
      <main>{children}</main>
      <Cart />
      <Footer></Footer>
    </div>
  )
}
