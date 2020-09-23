import React from 'react'

import Slider from 'react-slick'
import FoodCard from '../FoodCard'

import styles from './foodslider.module.css'
import cn from 'classnames'
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={cn(className, styles.nextArrow, styles.arrow)}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={cn(className, styles.prevArrow, styles.arrow)}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

export default function index({ slideData }) {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    className: styles.Slider,
    draggable: false,
    lazyload: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  }

  return (
    <div id={styles.foodSlider}>
      <div className="container">
        <div className={styles.aboutArea}>
          <h3>Popüler Menülerimiz</h3>
        </div>
        <Slider {...settings}>
          {slideData.map((x) => {
            return <FoodCard foodData={x}></FoodCard>
          })}
        </Slider>
      </div>
    </div>
  )
}
