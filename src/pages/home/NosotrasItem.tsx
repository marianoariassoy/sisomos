const NosotrasItem = ({ item }) => {
  return (
    <article className='flex flex-col'>
      <img
        src={item.image}
        alt={item.title}
        className='w-full'
      />
      <div>
        <h2 className='font-semibold'>{item.title}</h2>
        <p className='text-sm mb-3'>{item.description}</p>
        <p className='text-sm font-semibold'>{item.footer}</p>
      </div>
    </article>
  )
}

export default NosotrasItem
