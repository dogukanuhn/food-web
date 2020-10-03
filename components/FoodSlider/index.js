import React, { useState } from 'react'

import Slider from 'react-slick'
import FoodCard from '../FoodCard'
import FoodModal from '../FoodModal'

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
  const [modal, setmodal] = useState({ status: false, data: null })

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

  const showModal = () => {
    return (
      modal.status && (
        <React.Fragment>
          <div
            onClick={() => {
              setmodal({ status: false, data: null })
            }}
            className="overlay"
          ></div>
          <FoodModal
            data={modal.data}
            closeModal={() => setmodal({ status: false, data: null })}
          />
        </React.Fragment>
      )
    )
  }

  const displaySlide = () => {
    return slideData.map((x, i) => {
      return (
        <FoodCard
          key={i}
          foodData={x}
          openModal={() => setmodal({ status: true, data: x })}
        ></FoodCard>
      )
    })
  }
  return (
    <div id={styles.foodSlider}>
      {showModal()}

      <div className="container">
        <div className={styles.aboutArea}>
          <h3>Popüler Menülerimiz</h3>
        </div>

        <Slider {...settings}>{displaySlide()}</Slider>
      </div>
    </div>
  )
}
