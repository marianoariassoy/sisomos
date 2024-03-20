import { menu } from '../components/data'
import Social from '../layout/Social'

const Nav = () => {
  return (
    <div className='flex justify-center pt-12'>
      <Social />
      <nav className='gap-x-5 flex text-secondary text-sm'>
        {menu.map((item, index) => (
          <a
            className='uppercase font-semibold anchor-main text-center cursor-pointer'
            key={index}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Nav
