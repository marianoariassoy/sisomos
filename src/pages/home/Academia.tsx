import AcademiaItem from './AcademiaItem'

const Academia = () => {
  const data = [
    {
      tag: 'Oferta',
      title: 'Lorem ipsum dolor sit amet',
      video: 'https://www.youtube.com/watch?v=Fo7omZ03szI',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis excepturi, qui enim quisquam non natu.',
      price: '100'
    },
    {
      tag: 'Oferta',
      title: 'Lorem ipsum dolor sit amet',
      video: 'https://www.youtube.com/watch?v=diODgDvByNo',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis excepturi, qui enim quisquam non natu.',
      price: '100'
    },
    {
      tag: 'Oferta',
      title: 'Lorem ipsum dolor sit amet',
      video: 'https://www.youtube.com/watch?v=Ko3qDvK_9cY',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis excepturi, qui enim quisquam non natu.',
      price: '100'
    }
  ]
  return (
    <section
      className='pb-14 mb-14 shadow-lg relative'
      id='academia'
    >
      <div className='w-full m-auto max-w-5xl px-6 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='text-center flex flex-col gap-y-3'>
          <h1 className='text-2xl font-semibold'>Academia</h1>
          <h2 className='font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis excepturi, qui enim quisquam non
            natus.
          </h2>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
          {data.map((item, index) => (
            <AcademiaItem
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academia
