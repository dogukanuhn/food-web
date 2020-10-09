import React from 'react'
import Header from '../Header'
import SideMenu from '../Sidemenu'
import Content from '../Content'

export default function index({ children }) {
  return (
    <React.Fragment>
      <Header />
      <SideMenu />
      <Content>{children}</Content>
    </React.Fragment>
  )
}
