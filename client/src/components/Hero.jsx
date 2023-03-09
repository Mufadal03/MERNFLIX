import { Box } from '@chakra-ui/react'
import React from 'react'
import tmdbConfig from '../api/tmdb/tmdb.config'

const Hero = ({ data }) => {
    return (
      <Box h='100vh'>
        {
          data && (
            <Box h='100vh' style={{backgroundImage:`linear-gradient(to right,rgb(0, 0, 0), rgba(0, 0, 0, 0)) , url(${tmdbConfig.backdropImgUrl(data?.backdrop)})`,backgroundPosition:'center',backgroundSize:'cover'}}>
              
            </Box>



          )
       }
      </Box>
  )
}

export default Hero