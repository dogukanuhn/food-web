import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import CategoryButton from '../CategoryButton'
import styles from './categorylist.module.css'
import { Burger, FoodServing, TakeAway } from '../icons'
export default function index() {
  return (
    <div className="container" id={styles.categoryList}>
      <CategoryButton
        href="/burger"
        icon={<Burger />}
        text="Burger Menu"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<FoodServing />}
        text="Lunch Menu"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<TakeAway />}
        text="Eat And Go"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<Burger />}
        text="Burger Menu"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<FoodServing />}
        text="Lunch Menu"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<TakeAway />}
        text="Eat And Go"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<Burger />}
        text="Burger Menu"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<FoodServing />}
        text="Lunch Menu"
      ></CategoryButton>
      <CategoryButton
        href="/burger"
        icon={<TakeAway />}
        text="Eat And Go"
      ></CategoryButton>
    </div>
  )
}
