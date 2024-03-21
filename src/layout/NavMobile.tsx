import { menu } from '../components/data'

const NavMobile = () => {
  const CloseMenu = () => {
    const menu = document.querySelector('.nav-mobile')
    const bars = document.querySelector('.bars')
    menu?.classList.toggle('hidden')
    bars?.classList.toggle('active')
  }

  return (
    <nav
      className='nav-mobile fixed top-0 left-0 h-screen bg-white w-screen fade-in hidden z-40'
      onClick={CloseMenu}
    >
      <div className='w-full h-full items-center justify-center flex'>
        <div className='flex w-full flex-col gap-y-3 text-center justify-center items-center z-50'>
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='scroll'
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavMobile
