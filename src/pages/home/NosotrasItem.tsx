const NosotrasItem = ({ item }) => {
  return (
    <article className='flex flex-col'>
      <img
        src={item.image}
        alt={item.title}
        className='w-3/5 lg:w-full'
      />
      <div>
        <h2 className='font-semibold mb-3'>{item.title}</h2>
        <p className='text-sm mb-3'>{item.text}</p>
        <p className='text-sm font-semibold'>{item.tag}</p>
      </div>
    </article>
  )
}

export default NosotrasItem
