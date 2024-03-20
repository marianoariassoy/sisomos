import Logo from './Logo'
import Nav from './Nav'
import Sesion from './Sesion'

// import Bars from './Bars'

const Header = () => {
  return (
    <header className='sticky top-0 bg-white pt-6 z-50 shadow-md mb-12'>
      <div className='w-full m-auto max-w-5xl px-6 flex gap-x-3 justify-between items-start relative'>
        <div className='w-40'>
          <Logo />
        </div>
        <Nav />
        <Sesion />
      </div>
    </header>
  )
}

export default Header
