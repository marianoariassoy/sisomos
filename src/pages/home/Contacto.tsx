import Form from './Form'
import Image from '../../components/Image'

const Contacto = () => {
  return (
    <section className='pb-6 pt-14'>
      <div className='w-full m-auto max-w-5xl px-6 flex flex-col gap-y-12'>
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-xl font-semibold'>Comencemos a trabajar juntos para escalar tu negocio!</h1>
          <h3 className='font-semibold'>
            Completa el siguiente formulario y nos contactaremos a la brevedad. Si deseas una respuesta al instante
            contáctate vía WhatsApp.
          </h3>
        </div>
        <div className='flex justify-start items-start'>
          <div className='flex-1'>
            <Form />
          </div>
          <div>
            <Image
              src='/images/img1.jpg'
              alt='Contacto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
