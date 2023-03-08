import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import tmdbConfig from '../api/tmdb/tmdb.config'
import movieCss from './movie.module.css'
const MovieCard = ({ data }) => {
  return (
      <Box className={movieCss.MovieCard}>
          <Image src={tmdbConfig.posterImgUrl(data.poster_path)} alt={data.title} pos='relative' />
          <Box className={movieCss.details} pos='absolute' top='0' border={'2px solid red'} h='100%' w='100%'>
              <Heading>title</Heading>
          </Box>
    </Box>
  )
}

export default MovieCard