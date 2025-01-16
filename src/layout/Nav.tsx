import { menu } from '../components/data'
import Bars from './Bars'

const Nav = () => {
  return (
    <div className='w-full flex justify-end lg:justify-center pt-12 relative'>
      <nav className='w-full justify-center gap-x-4 text-secondary text-sm hidden lg:flex'>
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
