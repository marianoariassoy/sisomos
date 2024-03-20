import ReactPlayer from 'react-player'

const AcademiaItem = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div className='flex flex-col gap-y-1 items-start'>
        <span className='bg-primary p-2 rounded-md text-xs font-semibold uppercase'>{item.tag}</span>
        <h2 className='font-semibold'>{item.title}</h2>
      </div>

      <div className='aspect-video'>
        <ReactPlayer
          width='100%'
          height='100%'
          url={item.video}
        />
      </div>
      <div className='text-sm'>{item.desctiption}</div>
      <div className='flex justify-end font-semibold'>${item.price}</div>
      <button className='bg-primary font-semibold p-2 transition-colors rounded-md text-sm hover:bg-black/80 hover:text-white'>
        Comprar
      </button>
    </article>
  )
}

export default AcademiaItem
