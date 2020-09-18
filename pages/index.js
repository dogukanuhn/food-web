import Layout from '../components/layout'
import Banner from '../components/Banner'
import FoodSlider from '../components/FoodSlider'
import CategoryList from '../components/CategoryList'
import Campaign from '../components/Campaign'

export default function Home() {
  return (
    <Layout>
      <Banner
        position="left"
        src="/images/banner.jpg"
        title="Find Healthy And Favourite Foods Near You"
      ></Banner>
      <CategoryList></CategoryList>
      <Campaign></Campaign>
      <FoodSlider></FoodSlider>
    </Layout>
  )
}
