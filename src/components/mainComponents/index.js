import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header'
import Footer from '../footer'
import ScrollUp from '../scrollup'

const MainComponents = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default MainComponents