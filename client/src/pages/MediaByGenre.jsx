import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import Hero from '../components/Hero'
import MediaCollection from '../components/MediaCollection'

const MediaByGenre = () => {
  const {mediaType} = useParams()
  return (
    <Box>
      <Hero media={mediaType} api={mediaApi.getTrendingList({ mediaType, timeWindow: 'day' })} />
      <MediaCollection />
   </Box>
  )
}

export default MediaByGenre