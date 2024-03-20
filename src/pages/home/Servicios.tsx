import ServiciosItem from './ServiciosItem'
import Videos from './Videos'

const Servicios = () => {
  const data = [
    {
      title: 'Social Media',
      desctiption:
        'Conquista las plataformas digitales con estrategias innovadoras. Creamos conexiones auténticas que cautivan a tu audiencia, generando impacto real.'
    },
    {
      title: 'Community Management',
      desctiption:
        'Administramos la comunidad online y gestionamos la identidad y la imagen de marca, creando y manteniendo relaciones estables y duraderas con sus clientes, sus fans en internet.'
    },
    {
      title: 'Branding',
      desctiption:
        'Forjamos identidades que trascienden. Desde la esencia hasta la estampa visual, construimos marcas que perduran en la mente de tus clientes, dejando una impresión inolvidable.'
    },
    {
      title: 'Paid Media',
      desctiption:
        'Potenciamos tus ventas y tu imagen. Diseñamos campañas inteligentes y atractivas que posicionan tu marca en el epicentro de la atención.'
    },
    {
      title: 'Prensa y difusión',
      desctiption:
        'Tu presencia en línea, impecable y funcional. Creamos sitios web impactantes que no solo cautivan visualmente, sino que también potencian la experiencia del usuario, convirtiendo visitantes en clientes.'
    }
  ]
  return (
    <section className='pb-14 shadow-lg z-10'>
      <div className='w-full m-auto max-w-5xl px-6 flex flex-col gap-y-12'>
        <div className='text-xl font-medium'>
          Tu Visión, nuestra Prioridad: No solo son servicios, es una experiencia personalizada. Adaptamos las
          estrategias para alinearlas con la visión y objetivos de tu negocio.
        </div>
        <div className='grid grid-cols-2 gap-y-12 gap-x-24'>
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
        <div>
          <Videos />
        </div>
      </div>
    </section>
  )
}

export default Servicios
