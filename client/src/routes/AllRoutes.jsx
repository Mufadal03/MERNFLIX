import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import MediaDetail from '../pages/MediaDetail'
import PersonDetail from '../pages/PersonDetail'
import MediaByGenre from '../pages/MediaByGenre'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import HOC from '../components/HOC'
import MediaSearch from '../pages/MediaSearch'
import Favourite from '../pages/Favourite'
import PrivateRoute from '../components/PrivateRoute'
const AllRoutes = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<HOC><Home /></HOC>} />
              <Route path='/media/:mediaType' element={<HOC><MediaByGenre/></HOC>} /> 
              <Route path='/detail/:mediaType/:mediaId' element={<HOC><MediaDetail /></HOC>} /> 
              <Route path='/person/:personId' element={<HOC><PersonDetail /></HOC>} />
              <Route path='/search' element={<HOC><MediaSearch /></HOC>} />
              <Route path='/favourites' element={<PrivateRoute><HOC><Favourite /></HOC></PrivateRoute>}/>
              <Route path='/account/login' element={<Login />} />
              <Route path='/account/signup' element={<Signup/>} />
              <Route path='*' element={<h1>404 notfound</h1>} />
      </Routes>
      </>
  )
}

export default AllRoutes