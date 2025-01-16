import Layout from '../../layout/Layout'
import Clientes from './Clientes'
import Contacto from './Contacto'
import HeroSlider from './HeroSlider'
import Nosotras from './Nosotras'
import Servicios from './Servicios'

const index = () => {
  return (
    <Layout>
      <HeroSlider />
      <Servicios />
      <Clientes />
      <Nosotras />
      <Contacto />
    </Layout>
  )
}

export default index
