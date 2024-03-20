import { social } from '../components/data'

const Social = () => {
  return (
    <nav className='flex gap-x-2 items-center m-auto text-secondary'>
      {social.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          rel='noreferrer'
          className='w-6 h-6 flex rounded-full items-center text-sm justify-center bg-primary hover:bg-black/80 hover:text-white'
        >
          <item.icon />
        </a>
      ))}
    </nav>
  )
}

export default Social
