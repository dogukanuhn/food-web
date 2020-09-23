import Layout from '../components/Layout'
import Banner from '../components/Banner'
import FoodSlider from '../components/FoodSlider'
import CategoryList from '../components/CategoryList'
import Campaign from '../components/Campaign'
import { useSelector } from 'react-redux'

export default function Home() {
  const populerFood = useSelector(
    (state) => state['HomeReducer']['populerFoods']
  )
  return (
    <Layout>
      <Banner
        position="left"
        src="/images/banner.jpg"
        title="Find Healthy And Favourite Foods Near You"
      ></Banner>
      <CategoryList></CategoryList>
      <Campaign></Campaign>
      <FoodSlider slideData={populerFood}></FoodSlider>
    </Layout>
  )
}
