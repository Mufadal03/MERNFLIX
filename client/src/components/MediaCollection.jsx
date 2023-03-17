
import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import { generateUrl } from '../utils/genrateUrl'
import { genres } from '../utils/genreDb'
import LoadMore from './LoadMore'
import MediaCard from './MediaCard'
import MovieCard from './MediaCard'

const MediaCollection = () => {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const [totalPage,setTotalPage] = useState(null)
    const [media,setMedia]=useState([])
    const { mediaType } = useParams()
    const [page,setPage] = useState(1)

  useEffect(() => {
      window.scrollTo(0, 0);
      setPage(1)
  }, [mediaType])
    
    useEffect(() => {
        console.log(page)
        const fetchMedia = async () => {
            try {
                const response = await generateUrl(category, mediaApi, page, genres, mediaType)
                console.log(response)
                setTotalPage(response.total_pages)
                if (page === 1) setMedia(response.results)
                else setMedia(prev=>[...prev,...response.results])
            } catch (error) {
                console.log(error)
            }
        }
        fetchMedia()
    }, [mediaType, page])
    
    const loadMore = () => {
        setPage(prev => prev + 1)
        console.log('total pages',totalPage)
    }
  return (
      <Box>
          <Grid w='95vw' py='2rem' m='auto' gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(4,1fr)',lg:'repeat(5,1fr)'}} gap='.5rem'>
              {
                  media?.length > 0 && media?.map((el,i) => {
                      return (
                          <GridItem key={i} >
                              <MediaCard  titleFontSize={'xl'} titleLength={35} dateFontSize={'lg'} genreFontSize={'lg'} data={el} />
                          </GridItem>
                      )
                  })
              }
          </Grid>
          {totalPage && page<=totalPage && <LoadMore onClick={loadMore} />}
     </Box>
  )
}

export default MediaCollection