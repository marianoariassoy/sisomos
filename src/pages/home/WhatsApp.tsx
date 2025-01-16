import { Whatsapp } from '../../components/icons'

const WhatsApp = () => {
  return (
    <div className='fixed right-6 bottom-6 z-20'>
      <a
        href='https://wa.me/543875799145'
        target='_blank'
        rel='noreferrer'
        className='bg-primary text-secondary drop-shadow-md transition-all w-14 h-14 rounded-full text-xl flex items-center justify-center hover:bg-black/80 hover:text-white'
      >
        <Whatsapp />
      </a>
    </div>
  )
}

export default WhatsApp
