import ClientesItem from './ClientesItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Clientes = () => {
  const { data, loading } = useFetch(`/clientes`)

  if (loading) {
    return (
      <section className='py-20'>
        <Loader />
      </section>
    )
  }

  return (
    <section
      className='pb-14 mb-14 mt-14 shadow-lg relative'
      id='clientes'
    >
      <div className='w-screen lg:w-full m-auto max-w-5xl px-6 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='text-center flex flex-col gap-y-3'>
          <h1 className='text-2xl font-semibold'>Nuestros Clientes</h1>
          <h2 className='font-medium'>Conoce a los clientes que han confiado en nosotros</h2>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
          {data.map((item, index) => (
            <ClientesItem
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clientes
