import React from 'react'
import Navbar from '../components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import MediaDetail from '../pages/MediaDetail'
import PersonDetail from '../pages/PersonDetail'
import MediaByGenre from '../pages/MediaByGenre'
const AllRoutes = () => {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/media/:mediaType' element={<MediaByGenre/>} /> 
              <Route path='/detail/:mediaType/:mediaId' element={<MediaDetail />} /> 
              <Route path='/person/:personId' element={<PersonDetail />} />
              <Route path='*' element={<h1>404 notfound</h1>} />
            </Routes>
      </>
  )
}

export default AllRoutes