const NosotrasItem = ({ item }) => {
  return (
    <article className='flex items-center justify-center gap-3 lg:gap-8 flex-col lg:flex-row'>
      <div className='lg:w-1/3 lg:pr-0'>
        <img
          src={item.image}
          alt={item.title}
          className='w-2/3 lg:w-full'
        />
      </div>
      <div className='lg:w-2/3'>
        <h2 className='font-semibold mb-3'>{item.title}</h2>
        <p className='text-sm mb-3'>{item.text}</p>
        <p className='text-sm font-semibold'>{item.tag}</p>
      </div>
    </article>
  )
}

export default NosotrasItem
