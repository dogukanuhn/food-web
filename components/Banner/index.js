import React from 'react'
import styles from './banner.module.css'
import cn from 'classnames'
import IconButton from '../IconButton'
import { BannerType } from '../../Enums/BannerType'
import { FaCarrot, FaFish, FaHamburger } from 'react-icons/fa'
function MainBanner({ contentPosition, children, ...props }) {
  return (
    <div className={cn('container', styles.mainBanner, styles.banner)}>
      <div
        className={cn(
          styles.content,
          contentPosition === 'left' ? styles.contentLeft : styles.contentRight
        )}
      >
        <h2>Find Healthy And Favourite Foods Near You</h2>
        <div>
          <IconButton>
            <FaHamburger />
          </IconButton>
          <IconButton>
            <FaFish />
          </IconButton>
          <IconButton>
            <FaCarrot />
          </IconButton>
        </div>
      </div>
      <img src={props.src} alt="" />
    </div>
  )
}

export default function index({
  position = 'left',
  banner = BannerType.MAIN,
  ...props
}) {
  let Comp

  switch (banner) {
    case BannerType.MAIN:
      Comp = MainBanner
  }

  return <Comp contentPosition={position} {...props}></Comp>
}
