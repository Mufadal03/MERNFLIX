import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import mediaApi from '../api/modules/media.api'
import Genre from '../components/Genre'
import Hero from '../components/Hero'
 
const Home = () => {
 useEffect(() => {
   window.scrollTo(0, 0);
  }, [])
  return (
    <Box pb='2rem'bgColor={'black'} color='white'>
       <Hero media={'movie'} api={mediaApi.getTrendingList({ mediaType:'movie', timeWindow: 'day' })} />
      <Genre />
    </Box>
  )
}

export default Home