import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { tvGenres,movieGenres } from '../../utils/genreDb'
import movieCss from '.././styles/movie.module.css'
import defaultPoster from '../../utils/defaultPoster.png'
const MediaCard = ({ data, genreFontSize, titleFontSize, dateFontSize, titleLength }) => {
    return (
  <>
        {data && <Link to={`/detail/${data.release_date ? 'movie' : 'tv'}/${data.id}`}>
          <Box color='white' pos='relative' className={movieCss.MovieCard} fontFamily='bebas'>
          <Image src={data.poster_path?`https://image.tmdb.org/t/p/w300${data.poster_path}`:defaultPoster} alt={data.title} />
          <Box className={movieCss.details} pos='absolute' top='0'  h='100%' w='100%'>
              <Flex justifyContent={'flex-end'} h='inherit' direction={'column'} p='.2rem ' gap='.3rem'>
                
                <Flex alignItems='center' justifyContent={'space-between'}>
                    <Text textTransform={'uppercase'} border='1px solid rgba(255, 250, 250, 0.4)'  w={'fit-content'} fontSize={genreFontSize || 'xs'} px='.5rem' borderRadius={'1px'} color='rgb(243, 236, 236)'>
                    {
                        data.release_date?movieGenres.filter((el)=>el.id===(data?.genre_ids?.length > 0  ? data?.genre_ids[0]:'')).map((el)=>el.name):tvGenres.filter((el)=>el.id===(data?.genre_ids?.length > 0  ? data?.genre_ids[0]:'')).map((el)=>el.name)
                        
                    }
                    </Text>
                <Text fontSize={dateFontSize||'sm'}>{(() => {
                  let date = data?.release_date || data?.first_air_date 
                  return date?.slice(0,4)
                })()}</Text>
                </Flex>
                <Text fontSize={titleFontSize || 'sm'}>{(() => {
                  let str = data?.title || data?.name
                  return str.length<=(titleLength || 15)?str:str?.slice(0,titleLength || 18)+'...'
                })() }</Text>
              </Flex>
          </Box>
    </Box></Link>
    }
    </>
  )
}

export default MediaCard