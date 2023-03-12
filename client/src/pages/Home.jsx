import { Box } from '@chakra-ui/react'
import React from 'react'
import mediaApi from '../api/modules/media.api'
import Genre from '../components/Genre'
import Hero from '../components/Hero'
 
const Home = () => {
  return (
    <Box >
       <Hero media={'movie'} api={mediaApi.getTrendingList({ mediaType:'movie', timeWindow: 'day' })} />
      <Genre />
    </Box>
  )
}

export default Home