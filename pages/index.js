import Layout from '../components/Layout'
import Banner from '../components/Banner'
import FoodSlider from '../components/FoodSlider'
import axios from 'axios'

import { useEffect, useState } from 'react'

export default function Home() {
  const [populerFoods, setpopulerFoods] = useState([])

    useEffect(() => {
        axios.get("https://localhost:5003/api/Product").then(({data})=>{
          setpopulerFoods(data.result)
        })
    }, [])




    return (
      <Layout>
        <Banner
          position="left"
        src="/images/banner.jpg"
        title="Find Healthy And Favourite Foods Near You"
      ></Banner>
      {populerFoods &&  <FoodSlider slideData={populerFoods}></FoodSlider>}
     
    </Layout>
  )
}
