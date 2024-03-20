import NosotrasItem from './NosotrasItem'
const Nosotras = () => {
  const data = [
    {
      title: 'Noelia Soledad Vega',
      description: `Social Media Manager
      Comunicadora | Communicator
      Creadora de contenidos | Content creator
      Comunicación Digital | Digital Communicator
      Gestión de marca | Branding
      CEO en 'Si Somos. Agencia de comunicación digital'
      CEO en SaltaOk
      
      Trabajo como Social Media Manager hace 13 años.
      Soy una persona proactiva y perfeccionista. A cada proyecto le aporto una visión estética y de diseño.
      Me capacito y estudio constantemente técnicas de creación de contenido y todo lo que esté referido al 
      
      mundo de las redes sociales.
      Va a ser un placer conocerte y conocer tu proyecto.`,
      footer: 'Bienvenido a Así Somos.',
      image: '/images/noelia.jpg'
    },
    {
      title: 'Clara López Cattaneo',
      description: `Periodista | Journalist
      Comunicadora | Communicator
      Consultora política | Political consultant
      Creadora de contenidos | Content creator
      CEO en 'Si Somos. Agencia de comunicación digital'
      CEO en SaltaOk
      Estudié Comunicaciones Sociales. 
      Me especialicé en periodismo, comunicación institucional y política.
      También estudié Derecho. 
      Tengo un perfil analítico: soy observadora, detallista y proactiva. 
      Mi objetivo es que vos puedas comunicar con eficiencia y, lo mejor de todo, es que ¡llevo más de 20 años disfrutando de hacer lo que hago!.`,
      footer: 'Desde luego, va a ser un placer conocerte y conocer tu proyecto.',
      image: '/images/clara.jpg'
    },
    {
      title: 'Emilia López Cattaneo',
      description: `Comunicadora Social | Social Communicator
      Periodista | Journalist
      Comunicación Institucional | Institutional Communication
      Creadora de Contenidos | Content Creator
      CEO en 'Si Somos. Agencia de Comunicación Digital' | CEO en SaltaOk
      Soy Comunicadora Social, especializada en periodismo y comunicación institucional.
      Tengo más de 15 años de experiencia, tanto en el ámbito privado como público a nivel nacional, provincial y municipal.
      Soy super proactiva y se trabajar en equipo.`,
      footer: 'Sería un placer conocerte y conocer tu proyecto.',
      image: '/images/emilia.jpg'
    }
  ]
  return (
    <section className='bg-primary drop-shadow-lg pt-14 pb-14 shadow-inner flex flex-col gap-y-12'>
      <div className='w-full m-auto max-w-5xl px-6 grid grid-cols-3 gap-12 items-start'>
        {data.map((item, index) => (
          <NosotrasItem
            key={index}
            item={item}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='bg-secondary text-white font-bold h-10 w-60 transition-colors hover:bg-black/80 hover:text-white'>
          Contactanos
        </button>
      </div>
    </section>
  )
}

export default Nosotras
