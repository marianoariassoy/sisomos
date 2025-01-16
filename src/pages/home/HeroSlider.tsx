import Whatsapp from './WhatsApp'
import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Back, Forward } from '../../components/icons'

const SliderItem = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = data.image
    image.onload = () => {
      setIsLoading(false)
    }
  }, [data.image])

  return isLoading ? (
    <div className='w-full h-[70vh]'>
      <Loader />
    </div>
  ) : (
    <img
      src={data.image}
      className='w-full h-[70vh] object-cover object-center'
    />
  )
}

const HeroSlider = () => {
  const { data, loading } = useFetch(`/portada`)

  const sliderProperties = {
    autoplay: true,
    transitionDuration: 300,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-12 bottom-12 left-auto right-20 flex justify-end hover:opacity-70 transition-all lg:right-auto lg:bottom-auto'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 bottom-12 lg:mr-12 hover:opacity-70 transition-all lg:bottom-auto'>
        <Forward />
      </button>
    )
  }

  if (loading)
    return (
      <div className='w-full h-full'>
        <Loader />
      </div>
    )

  return (
    <section
      className='mb-14 shadow-lg relative'
      id='home'
    >
      <div className='w-full text-white overflow-hidden'>
        <Slide {...sliderProperties}>
          {data.map(item => (
            <SliderItem
              key={item.id}
              data={item}
            />
          ))}
        </Slide>
      </div>
      <div className='absolute top-0 w-full h-full bg-black/20 flex items-center justify-center text-white'>
        <div className='max-w-3xl px-6 text-xl lg:text-3xl font-medium text-center m-auto leading-6'>
          <span className='font-bold block'> Para nosotras vos y tu proyecto son importantes.</span>
          <span className='block'>Somos una empresa que se adapta a las necesidades del cliente.</span>
        </div>
      </div>
      <Whatsapp />
    </section>
  )
}

export default HeroSlider
