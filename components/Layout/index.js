import Header from '../Header'
import Footer from '../Footer'
import FoodModal from '../FoodModal'

import Cart from '../Cart'
import { useDispatch, useSelector } from 'react-redux'
import styles from './layout.module.css'
export default function layout({ children }) {
  const toggleModal = useSelector((state) => state.modalStatus)
  const dispatch = useDispatch()
  return (
    <div id={styles.layout}>
      {toggleModal && (
        <div
          onClick={() => dispatch({ type: 'ToggleModal' })}
          className={styles.overlay}
        ></div>
      )}
      {toggleModal && <FoodModal />}
      <Header></Header>
      {children}
      <Cart />
      <Footer></Footer>
    </div>
  )
}
