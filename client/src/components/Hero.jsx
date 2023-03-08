import { Box } from '@chakra-ui/react'
import React from 'react'
import tmdbConfig from '../api/tmdb/tmdb.config'

const Hero = ({ data }) => {
  console.log(data)
    return (
      <Box h='100vh'>
        {
          data && (
            <Box h='100vh' bgPos={'center'} bgSize='cover'bgImage={`url(${tmdbConfig.backdropImgUrl(data.backdrop)})`}>
              <Box h='100%' style={{background:'linear-gradient(to right,rgb(0, 0, 0), rgba(0, 0, 0, 0))'}}>

                </Box>
            </Box>



          )
       }
      </Box>
  )
}

export default Hero