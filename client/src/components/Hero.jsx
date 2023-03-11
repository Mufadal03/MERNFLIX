import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import tmdbConfig from '../api/tmdb/tmdb.config'
import HeroLoading from './Loaders/HeroLoading'

const Hero = ({ api }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const {mediaType} = useParams()
  useEffect(() => {
    const FetchMedia = async () => {
      try {
        setLoading(true)
        const response = await api
        const details = await mediaApi.getDetail({ mediaType: mediaType || tmdbConfig.mediaType.movie, mediaId: response.results[0].id })
        setLoading(false)
        setData({
          backdrop: details.backdrop_path,
          genres: details.genres,
          description: details.overview,
          runtime: details.runtime,
          title: details.title,
          rating: details.vote_average,
          video: details.video.results?.find((el) => el.type ==='Trailer')
        })
      } catch (error) {
        console.log('show error on toast')
      }
    }
    FetchMedia()
  },[mediaType])
  if(loading)return <HeroLoading />
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