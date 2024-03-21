const ServiciosItem = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-3 items-start'>
      <h1 className='font-semibold'>{item.title}</h1>
      <div className='text-sm'>{item.desctiption}</div>
      <a
        href='#contacto'
        className='bg-primary text-secondary font-bold py-2 w-48 transition-colors hover:bg-black/80 hover:text-white text-sm mt-3 scroll flex items-center justify-center rounded-md'
      >
        Contactanos
      </a>
    </article>
  )
}

export default ServiciosItem
