import HeroItem from './HeroItem'
import Whatsapp from './WhatsApp'

const Hero = () => {
  const data = [
    {
      title: 'Academia',
      url: '#academia',
      image: '/images/hero1.jpg'
    },
    {
      title: 'Servicios',
      url: '#servicios',
      image: '/images/hero2.jpg'
    }
  ]
  return (
    <section
      className='pb-14 mb-14 shadow-lg relative'
      id='home'
    >
      <div className='w-full m-auto max-w-5xl px-6 lg:px-14 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='w-full lg:text-xl font-medium text-center max-w-md m-auto'>
          Para nosotras vos y tu proyecto son importantes. <br />
          Somos una empresa que se adapta a las necesidades del cliente.
        </div>
        <div className='w-full grid lg:grid-cols-2 gap-x-12 gap-y-6 relative'>
          {data.map((item, index) => (
            <HeroItem
              key={index}
              item={item}
            />
          ))}
          <div className='absolute opacity-50 -z-10 left-1/2 top-1/2 -mt-8 hidden lg:block'>
            <img
              src='/images/asset1.svg'
              alt='Imagen'
              className='w-1/2 -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        </div>
      </div>
      <Whatsapp />
    </section>
  )
}

export default Hero
