import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Cart />
      <Footer></Footer>
    </div>
  )
}

export default Layout
