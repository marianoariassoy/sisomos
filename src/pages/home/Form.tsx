import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Loader from '../../components/Loader'

interface Inputs {
  name: string
  phone: string
  email: string
  message: string
}

const FormContacto = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: 'karielazem@gmail.com',
      from: 'karielazem@gmail.com',
      from_name: 'Karina El Azem',
      subject: 'Contacto'
    }

    axios.post(' ', { ...data, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const texts = {
    name: 'Nombre Apellido*',
    phone: 'WhatsApp*',
    email: 'E-mail*',
    rubro: 'Rubro del negocio*',
    services: '¿Que servicios necesitas?',
    servicesOptions: [
      'Contenido de redes',
      'Publicidad',
      'Manejo de redes sociales',
      'Branding',
      'Prensa y difusión',
      'Otros'
    ],
    amount: '¿Cuánto podes invertir en publicidad?',
    ig: 'Instagram de tu empresa*',
    web: 'Sitio web de tu empresa',
    message: 'Mensaje',
    error: 'Se produjo un error al enviar el mensaje',
    success: '¡Tu mensaje fue enviado! Gracias por contactarte con conmigo.',
    send: 'Enviar',
    required: 'Por favor completá este campo'
  }

  const Error = () => {
    return <div className='text-sm text-black/60'>{texts.required}</div>
  }

  return (
    <div className='lg:pr-12'>
      {error ? (
        <div className='text-secondary'>{texts.error}</div>
      ) : sended ? (
        <div className='text-secondary'>{texts.success}</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium text-sm'>{texts.name}</label>
              <input
                className='w-full border bg-transparent border-black h-10 px-4'
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <div className='flex flex-col gap-y-2'>
                <label className='block font-medium text-sm'>{texts.email}</label>
                <input
                  className='w-full border bg-transparent border-black h-10 px-4'
                  {...register('email', { required: true })}
                />
                {errors.email && <Error />}
              </div>
              <div className='flex flex-col gap-y-2'>
                <label className='block font-medium text-sm'>{texts.phone}</label>
                <input
                  className='w-full border bg-transparent border-black h-10 px-4'
                  {...register('phone', { required: true })}
                />
                {errors.phone && <Error />}
              </div>
              <div className='flex flex-col gap-y-2'>
                <label className='block font-medium text-sm'>{texts.rubro}</label>
                <input
                  className='w-full border bg-transparent border-black h-10 px-4'
                  {...register('rubro', { required: true })}
                />
                {errors.rubro && <Error />}
              </div>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium text-sm'>{texts.services}</label>
              <div className='flex flex-col gap-y-1'>
                {texts.servicesOptions.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-x-3'
                  >
                    <input
                      type='checkbox'
                      className='w-4 h-4'
                      {...register('services')}
                    />
                    <label className='text-sm'>{item}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium text-sm'>{texts.amount}</label>
              <input
                className='w-full border bg-transparent border-black h-10 px-4'
                {...register('amount')}
              />
              {errors.amount && <Error />}
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <div className='flex flex-col gap-y-2'>
                <label className='block font-medium text-sm'>{texts.ig}</label>
                <input
                  className='w-full border bg-transparent border-black h-10 px-4'
                  {...register('ig', { required: true })}
                />
                {errors.ig && <Error />}
              </div>
              <div className='flex flex-col gap-y-2'>
                <label className='block font-medium text-sm'>{texts.web}</label>
                <input
                  className='w-full border bg-transparent border-black h-10 px-4'
                  {...register('web')}
                />
                {errors.web && <Error />}
              </div>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium'>{texts.message}</label>
              <textarea
                className='w-full border bg-transparent border-black h-20 p-4'
                {...register('message', { required: true })}
              />
              {errors.message && <Error />}
            </div>
            <div className='flex justify-end'>
              {sending ? (
                <div className='h-14'>
                  <Loader />
                </div>
              ) : (
                <button
                  type='submit'
                  className='bg-primary text-secondary font-bold h-10 w-60 transition-colors hover:bg-black/80 hover:text-white rounded-lg'
                >
                  {texts.send}
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormContacto
