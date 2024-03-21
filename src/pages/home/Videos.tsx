import ReactPlayer from 'react-player'

const Videos = () => {
  const data = [
    {
      title: 'Video 1',
      url: 'https://youtube.com/shorts/NbOw8MNmxj0?si=b23xiPpyh1MSTWiR'
    },
    {
      title: 'Video 2',
      url: 'https://youtube.com/shorts/7JHIpEk4X80?si=TdS7RTHiJxoFWTJO'
    },
    {
      title: 'Video 3',
      url: 'https://youtube.com/shorts/1xxogQLlR2o?si=mPFEwwrEABdI8nNa'
    }
  ]

  return (
    <section className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
      {data.map((item, index) => (
        <article
          key={index}
          className='aspect-[9/16]'
        >
          <ReactPlayer
            width='100%'
            height='100%'
            url={item.url}
          />
        </article>
      ))}
    </section>
  )
}

export default Videos
