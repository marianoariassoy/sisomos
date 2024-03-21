import { menu } from '../components/data'
import Social from '../layout/Social'
import Bars from './Bars'

const Nav = () => {
  return (
    <div className='w-full flex justify-end lg:justify-center pt-12 relative'>
      <div className='absolute top-0 right-0 lg:right-auto'>
        <Social />
      </div>
      <nav className='w-full justify-center gap-x-3 text-secondary text-sm hidden lg:flex'>
        {menu.map((item, index) => (
          <a
            href={item.url}
            className='uppercase font-semibold anchor-main text-center cursor-pointer scroll'
            key={index}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <Bars />
    </div>
  )
}

export default Nav
