import ReactPlayer from 'react-player'

const AcademiaItem = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div className='flex flex-col gap-y-1 items-start'>
        {item.tag && (
          <span className='bg-primary py-2 px-6 rounded-md text-xs font-semibold uppercase'>{item.tag}</span>
        )}
        <h2 className='font-semibold'>{item.title}</h2>
      </div>
      <div className='aspect-video'>
        <ReactPlayer
          url={item.video}
          controls
          width='100%'
          height={180}
        />
      </div>
      <div className='text-sm'>{item.text}</div>
      <div className='flex justify-end font-semibold'>${item.price}</div>
      <button className='bg-primary font-semibold p-2 transition-colors rounded-lg text-sm hover:bg-black/80 hover:text-white'>
        Comprar
      </button>
    </article>
  )
}

export default AcademiaItem
