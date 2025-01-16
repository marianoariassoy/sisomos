import ImageComponent from '../../components/Image'

const ClientesItem = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <h2 className='font-semibold'>{item.title}</h2>

      {item.image && (
        <div className='aspect-[7/4.5] rounded-2xl overflow-hidden'>
          <ImageComponent
            src={item.image}
            alt={item.title}
          />
        </div>
      )}

      <div className='text-sm'>{item.text}</div>
    </article>
  )
}

export default ClientesItem
