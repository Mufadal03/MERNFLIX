import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PersonApi from '../api/modules/person.api'
import LoadMore from './LoadMore'
import MovieCard from './MediaCard'

const PersonMedia = () => {
  const { personId } = useParams()
  const [medias, setMedias] = useState([])
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  const skip = 10
  useEffect(() => {
    window.scrollTo(0,0)
  },[personId])
  useEffect(() => {
    const fetchPersonMedia = async() => {
      try {
        setLoading(true)
        const response = await PersonApi.getMedias({ personId })
        const sortedMedias = response.cast.sort((a, b) => getReleaseDate(b) - getReleaseDate(a))
        setMedias([...sortedMedias])
       setData([...sortedMedias].splice(0,skip))
        setLoading(false)
      } catch (error) {
        console.log('show error on toast')
      }
    }
    fetchPersonMedia()
  }, [personId])
  
  const getReleaseDate = (media) => {
    const date = media.media_type === 'movie' ? new Date(media.release_date) : new Date(media.first_air_date);
    return date.getTime();
  }

  const loadMore = () => {
    console.log('running load more')
    setData([...data, ...[...medias].splice(page * skip, skip)])
    setPage(prev=>prev+1)
  }
  if(loading)return <h1>Loading....</h1>
  return (
    <Box  >
      <Grid py='2rem' gridTemplateColumns={'repeat(5,1fr)'} gap='1rem'>
        {
          data?.length > 0 && data?.map((media,i) => {
            return (
              <GridItem key={i}>
                <MovieCard titleFontSize={'xl'} titleLength={35} dateFontSize={'lg'} genreFontSize={'lg'}data={media} />
              </GridItem>
            )
          })
        }
      </Grid>
    { data.length< medias.length && <LoadMore onClick={loadMore} />}
    </Box>
  )
}

export default PersonMedia