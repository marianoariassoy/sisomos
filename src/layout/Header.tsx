import { useEffect } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import scroll from '../utils/scroll'
import Social from '../layout/Social'

const Header = () => {
  useEffect(() => {
    scroll()
  }, [])

  return (
    <>
      <header className='sticky top-0 bg-white pt-8 z-50 shadow-lg'>
        <div className='w-full m-auto max-w-6xl px-6 flex gap-x-3 justify-between items-start relative'>
          <div className='lg:w-52'>
            <Logo />
          </div>
          <div className='flex-1'>
            <Nav />
          </div>
          <div className='w-52 justify-end pt-10 hidden lg:flex'>
            <Social />
          </div>
        </div>
      </header>
      <div className='fixed -m-12 bg-white w-full h-6 z-40 hidden lg:block'></div>
    </>
  )
}

export default Header
