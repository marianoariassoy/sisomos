import { Link } from 'wouter'
import Logo from '../assets/logo.svg'

const LogoModule = () => {
  return (
    <div className='absolute top-0'>
      <Link href='/'>
        <div className='bg-secondary rounded-full w-40 h-40 flex items-center transition-all hover:rotate-6 hover:drop-shadow-md'>
          <img
            src={Logo}
            alt='Logo'
            className='h-full mt-1 -ml-2'
          />
        </div>
      </Link>
    </div>
  )
}

export default LogoModule
