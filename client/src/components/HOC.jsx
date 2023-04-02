import React from 'react'
import Footer from './Common/Footer'
import Navbar from './Common/Navbar'

const HOC = ({ children }) => {
  return (
      <>
          <Navbar />
          {children}
          <Footer />
      </>
  )
}

export default HOC