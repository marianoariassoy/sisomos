import Image from '../../components/Image'

const HeroItem = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-4 items-center'>
      <div className='w-full aspect-[7/4.5] rounded-2xl overflow-hidden  relative'>
        <div className='w-full h-full absolute bg-primary mix-blend-multiply opacity-0 cursor-pointer hover:opacity-80 transition-opacity'></div>
        <Image
          src={item.image}
          alt={item.title}
        />
      </div>
      <button className='bg-primary text-secondary font-bold h-10 w-60 transition-colors hover:bg-black/80 hover:text-white'>
        {item.title}
      </button>
    </article>
  )
}

export default HeroItem
