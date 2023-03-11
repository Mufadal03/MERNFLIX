import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import tmdbConfig from '../api/tmdb/tmdb.config'
import { genres } from '../utils/genreDb'
import movieCss from './styles/movie.module.css'

const MovieCard = ({ data }) => {
    return (
  <>
            {data && <Link to={`/detail/${data.release_date?'movie':'tv'}/${data.id}`}><Box pos='relative' className={movieCss.MovieCard}>
          <Image src={tmdbConfig.posterImgUrl(data.poster_path)} alt={data.title}  />
          <Box className={movieCss.details} pos='absolute' top='0'  h='100%' w='100%'>
              <Flex justifyContent={'flex-end'} h='inherit' direction={'column'} p='.2rem ' gap='.3rem'>
                
                <Flex alignItems='center' justifyContent={'space-between'}>
                    <Text textTransform={'uppercase'} border='1px solid rgba(255, 250, 250, 0.4)'  w={'fit-content'} fontSize='sm' px='.5rem' borderRadius={'1px'} color='rgb(243, 236, 236)'>
{
                        genres.filter((el)=>el.id===data.genre_ids[0]).map((el)=>el.name)
                        
                    }
                    </Text>
                <Text>{(() => {
                  let date = data?.release_date || data?.first_air_date 
                  return date?.slice(0,4)
                })()}</Text>
                </Flex>
                <Text fontSize={'md'}>{(() => {
                  let str = data?.title || data?.name
                  return str.length<=15?str:str?.slice(0,19)+'....'
                })() }</Text>
              </Flex>
          </Box>
    </Box></Link>
    }
    </>
  )
}

export default MovieCard