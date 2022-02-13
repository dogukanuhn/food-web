import Header from '../Header'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import Cart from '../Cart'
import styles from './layout.module.css'
export default function layout({ children }) {
  const router = useRouter()
  return (
    <div id={styles.layout}>
      <Header></Header>
      <main>{children}</main>
      {router.pathname !== '/sepet' && <Cart />}
    </div>
  )
}
