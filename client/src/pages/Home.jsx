import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import mediaApi from '../api/modules/media.api'
import tmdbConfig from '../api/tmdb/tmdb.config'
import Genre from '../components/Genre'
import Hero from '../components/Hero'
 
const Home = () => {
  const [Landing, setLanding] = useState()
  
  useEffect(() => {
    mediaApi.getTrendingList({ mediaType: tmdbConfig.mediaType.movie, timeWindow: 'week' })
      .then((res) => mediaApi.getDetail({ mediaType: tmdbConfig.mediaType.movie, mediaId: res.results[0].id }))
      .then((res) => {
        setLanding({
          ...Landing,
          backdrop: res.backdrop_path,
           genres: res.genres,
           description: res.overview,
           runtime: res.runtime,
           title: res.title,
           rating: res.vote_average,
           video: res.video.results?.find((el) => el.type ==='Trailer')
        })
      })
      .catch((err)=>console.log('show on toast err'))
  }, [])
  
  
  return (
    <Box >
      <Hero data={Landing} />
      <Genre />
    </Box>
  )
}

export default Home