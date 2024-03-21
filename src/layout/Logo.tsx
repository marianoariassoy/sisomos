const LogoModule = () => {
  return (
    <div className='absolute top-0'>
      <a
        href='#home'
        className='scroll'
      >
        <div className='bg-secondary rounded-full w-40 h-40 flex items-center transition-all hover:rotate-6 hover:drop-shadow-md'>
          <img
            src='/assets/logo.svg'
            alt='Logo'
            className='h-full mt-1 -ml-2'
          />
        </div>
      </a>
    </div>
  )
}

export default LogoModule
