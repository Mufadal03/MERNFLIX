import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import MediaCollection from '../components/MediaCollection'

const MediaByGenre = () => {
  
  return (
    <Box bgColor={'black'} color='white' pb='2rem'>
      <Hero />
      <MediaCollection />
   </Box>
  )
}

export default MediaByGenre