import ServiciosItem from './ServiciosItem'
import Videos from './Videos'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Servicios = () => {
  const { data, loading } = useFetch(`/servicios`)

  if (loading) {
    return (
      <section className='py-20'>
        <Loader />
      </section>
    )
  }

  return (
    <section
      className='pb-14 shadow-lg z-10'
      id='servicios'
    >
      <div className='w-full m-auto max-w-5xl px-6 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='lg:text-xl'>
          Tu Visión, nuestra Prioridad: No solo son servicios, es una experiencia personalizada. Adaptamos las
          estrategias para alinearlas con la visión y objetivos de tu negocio.
        </div>
        <div className='grid lg:grid-cols-2 gap-y-6 lg:gap-y-12 gap-x-24'>
          {data.map((item, index) => (
            <ServiciosItem
              key={index}
              item={item}
            />
          ))}
          <div className='rounded-2xl bg-gray-2 p-6 flex flex-col gap-y-3'>
            <h2>Nuestro servicio se traduce en beneficios clave:</h2>
            <div className='text-sm'>
              • Aumentamos tus ventas <br />
              • Viralizamos tu marca <br />• Optimizamos tu negocio
            </div>
            <div className='text-sm'>
              Somos tu verdadero socio para crecer! Imagina tener un equipo de marketing trabajando enfocado en
              tunegocio, generandote más ventas, procesos más ágiles, mayorproductividad, reconocimiento, haciendolo
              crecer cada día.
            </div>
          </div>
        </div>

        <Videos />
      </div>
    </section>
  )
}

export default Servicios
