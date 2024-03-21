import Footer from './Footer'
import Header from './Header'
import NavMobile from './NavMobile'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <NavMobile />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
