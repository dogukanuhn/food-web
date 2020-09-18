import React from 'react'
import styles from './banner.module.css'
import cn from 'classnames'
import IconButton from '../IconButton'
import { BannerType } from '../../Enums/BannerType'
import { FaCarrot, FaFish, FaHamburger } from 'react-icons/fa'

function MainBanner({ contentPosition, title, ...props }) {
  return (
    <div className={cn('container', styles.mainBanner, styles.banner)}>
      <div
        className={cn(
          styles.content,
          contentPosition === 'left' ? styles.contentLeft : styles.contentRight
        )}
      >
        <h2>{title}</h2>
        <div>
          <IconButton className={styles.iconButton}>
            <FaHamburger />
          </IconButton>
          <IconButton className={styles.iconButton}>
            <FaFish />
          </IconButton>
          <IconButton className={styles.iconButton}>
            <FaCarrot />
          </IconButton>
        </div>
      </div>
      <img src={props.src} alt="" />
    </div>
  )
}

function SubBanner({ title, ...props }) {
  return (
    <div className={cn(styles.subBanner, styles.banner)}>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${props.src})` }}
      ></div>
      <div className={styles.overlay}>
        <h3>Vodafone %25 Burger İndirimi</h3>
      </div>
    </div>
  )
}

export default function index({
  position = 'left',
  title,
  banner = BannerType.MAIN,
  ...props
}) {
  let Comp
  if (banner === BannerType.MAIN) {
    Comp = (
      <MainBanner
        contentPosition={position}
        title={title}
        {...props}
      ></MainBanner>
    )
  } else if (banner === BannerType.SUB) {
    Comp = <SubBanner {...props}></SubBanner>
  }

  return Comp
}
