import Header from '../Header'
import Footer from '../Footer'

import Cart from '../Cart'
import styles from './layout.module.css'
export default function layout({ children }) {
  return (
    <div id={styles.layout}>
      <Header></Header>
      <main>{children}</main>
      <Cart />
      <Footer></Footer>
    </div>
  )
}
