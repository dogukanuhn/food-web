import Layout from '../components/layout'
import Banner from '../components/Banner'
import FoodSlider from '../components/FoodSlider'

export default function Home() {
  return (
    <Layout>
      <Banner position="left" src="/images/banner.jpg"></Banner>
      <FoodSlider></FoodSlider>
    </Layout>
  )
}
