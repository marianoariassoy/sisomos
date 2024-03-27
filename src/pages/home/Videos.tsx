import ReactPlayer from 'react-player'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Videos = () => {
  const { data, loading } = useFetch(`/videos`)

  if (loading) {
    return (
      <section className='py-20'>
        <Loader />
      </section>
    )
  }

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
            url={item.video}
          />
        </article>
      ))}
    </section>
  )
}

export default Videos
