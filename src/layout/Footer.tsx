import { menu } from '../components/data'
import Social from './Social'

const Footer = () => {
  return (
    <footer>
      <div className='py-8 px-6 shadow-lg flex flex-col gap-y-6'>
        <nav className='text-secondary flex justify-center font-semibold [&>a:last-child]:border-0 text-sm'>
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='hover:opacity-50 transition-opacity border-r border-gray-600 px-2 lg:px-3 scroll'
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className='flex justify-center'>
          <Social />
        </div>
      </div>
      <div className='px-6 py-8 text-sm text-center flex flex-col gap-y-1'>
        <span>2025 © Si somos. Todos los derechos reservados</span>
        <a
          href='http://mcdisenio.com.ar/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold hover:opacity-50 transition-opacity'
        >
          by MCdisenio
        </a>
      </div>
    </footer>
  )
}

export default Footer
