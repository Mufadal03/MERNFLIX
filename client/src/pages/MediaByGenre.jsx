import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import Hero from '../components/Hero'

const MediaByGenre = () => {
  const { mediaType } = useParams()
  const [hero, setHero] = useState()
  useEffect(() => {
    mediaApi.getList({ mediaType, mediaCategory: 'popular' })
      .then((res) =>  mediaApi.getDetail({ mediaType: mediaType, mediaId: res.results[0].id }))
      .then((res) => {
        setHero({
          ...hero,
          backdrop: res.backdrop_path,
           genres: res.genres,
           description: res.overview,
           runtime: res.runtime,
           title: res.title,
           rating: res.vote_average,
           video: res.video.results?.find((el) => el.type ==='Trailer')
        })
      })
    .catch(err=>console.log('show err on toast'))
  }, [mediaType])
  

  
  return (
    <Box>
      <Hero data={hero} />
   </Box>
  )
}

export default MediaByGenre