import Layout from '../../layout/Layout'
import Academia from './Academia'
import Contacto from './Contacto'
import Hero from './Hero'
import Nosotras from './Nosotras'
import Servicios from './Servicios'

const index = () => {
  return (
    <Layout>
      <Hero />
      <Academia />
      <Servicios />
      <Nosotras />
      <Contacto />
    </Layout>
  )
}

export default index
