import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Slider from 'react-slick'
import FoodCard from '../FoodCard'
import IconButton from '../IconButton'

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

export default function index() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    className: styles.Slider,
    draggable: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  }

  return (
    <section id={styles.foodSlider}>
      <div className="container">
        <div className={styles.aboutArea}>
          <h3>Yemeklerimiz</h3>
        </div>
        <Slider {...settings}>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
        </Slider>
      </div>
    </section>
  )
}
