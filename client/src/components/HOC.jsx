import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

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