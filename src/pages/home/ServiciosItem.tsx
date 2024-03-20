const ServiciosItem = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-3 items-start'>
      <h1 className='font-semibold'>{item.title}</h1>
      <div className='text-sm'>{item.desctiption}</div>
      <button className='bg-primary text-secondary font-bold py-2 w-48 transition-colors hover:bg-black/80 hover:text-white text-sm mt-3'>
        Contactanos
      </button>
    </article>
  )
}

export default ServiciosItem
