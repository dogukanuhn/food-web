import React, { useState } from 'react'
import propTypes from 'prop-types'
import styles from './content.module.css'
import Button from '../Button'
export default function index({ tabs, children }) {
  const [selectedTab, setSelectedTab] = useState(0)

  const renderTabs = () => {
    return tabs.map((x, i) => {
      return (
        <Button
          color={selectedTab === i && true}
          onClick={() => setSelectedTab(i)}
        >
          {x}
        </Button>
      )
    })
  }
  return (
    <React.Fragment>
      <div className={styles.tabs}>{renderTabs()}</div>
      {typeof children != 'object' ? children : children[selectedTab]}
    </React.Fragment>
  )
}

index.propTypes = {
  tabs: propTypes.instanceOf(Array).isRequired,
  children: propTypes.instanceOf(Array).isRequired
}
