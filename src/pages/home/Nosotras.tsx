import NosotrasItem from './NosotrasItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Nosotras = () => {
  const { data, loading } = useFetch(`/nosotras`)

  if (loading) {
    return (
      <section className='py-20'>
        <Loader />
      </section>
    )
  }

  return (
    <section
      className='bg-primary drop-shadow-lg pt-14 pb-14 shadow-inner flex flex-col gap-y-12'
      id='nosotras'
    >
      <div className='w-full m-auto max-w-5xl px-6 flex flex-col gap-3'>
        {data.map((item, index) => (
          <NosotrasItem
            key={index}
            item={item}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <a
          href='#contacto'
          className='bg-secondary text-white font-bold h-10 w-60 transition-colors hover:bg-black/80 hover:text-white scroll flex items-center justify-center rounded-lg text-sm lg:text-base'
        >
          Contactanos
        </a>
      </div>
    </section>
  )
}

export default Nosotras
