import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import CategoryButton from '../CategoryButton'
import styles from './categorylist.module.css'
import { Burger, FoodServing, TakeAway } from '../icons'
export default function index({ active = null }) {
  return (
    <div id={styles.categoryList}>
      <div className="container" id={styles.inner}>
        <CategoryButton
          className={active === 'burger' && styles.active}
          href="/menuler/burger"
          icon={<Burger />}
          text="Burger Menu"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<FoodServing />}
          text="Lunch Menu"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<TakeAway />}
          text="Eat And Go"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<Burger />}
          text="Burger Menu"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<FoodServing />}
          text="Lunch Menu"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<TakeAway />}
          text="Eat And Go"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<Burger />}
          text="Burger Menu"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<FoodServing />}
          text="Lunch Menu"
        ></CategoryButton>
        <CategoryButton
          href="/menuler/burger"
          icon={<TakeAway />}
          text="Eat And Go"
        ></CategoryButton>
      </div>
    </div>
  )
}
