import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
