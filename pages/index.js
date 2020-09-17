import Layout from '../components/layout'
import Banner from '../components/Banner'
import FoodSlider from '../components/FoodSlider'
import CategoryList from '../components/CategoryList'

export default function Home() {
  return (
    <Layout>
      <Banner position="left" src="/images/banner.jpg"></Banner>
      <CategoryList></CategoryList>
      <FoodSlider></FoodSlider>
    </Layout>
  )
}
