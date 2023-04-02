
import { Box,Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import mediaApi from '../../api/modules/media.api'
import { generateUrl } from '../../utils/genrateUrl'
import { tvGenres,movieGenres } from '../../utils/genreDb'
import Category from './Category'
import LoadMore from './LoadMore'
import MediaCard from './MediaCard'

const MediaCollection = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const [totalPage,setTotalPage] = useState(null)
    const [media,setMedia]=useState([])
    const { mediaType } = useParams()
    const [page, setPage] = useState(1)
    const  location  = useLocation()
    const [genre, setGenre] = useState(searchParams.get('genre') || 'trending')
    
  useEffect(() => {
      window.scrollTo(0, 0);
      if(location.state===null)setGenre('trending')
      setPage(1)
      setMedia([])
  }, [location.pathname])
    
    
    const fetchMedia = async () => {
        try {
                const response = await generateUrl(genre, mediaApi, page, tvGenres,movieGenres, mediaType)
                setTotalPage(response.total_pages)
                if (page === 1) setMedia(response.results)
                else setMedia(prev=>[...prev,...response.results])
            } catch (error) {
                console.log(error)
            }
        }
    useEffect(() => {
        fetchMedia()
    }, [mediaType, page,genre])
    
    useEffect(() => {
        setSearchParams({
            genre
        })
    }, [genre,mediaType])
    
    const loadMore = () => {
        setPage(prev => prev + 1)
    }
  return (
      <Box>
          <Flex w={'95%'} m='auto' alignItems={'center'} fontFamily='bebas' gap='.5rem' justifyContent={'flex-end'} my='1rem'>
              <Text>Category</Text>
              <Category mediaType={mediaType} value={genre} setCategory={setGenre } />
          </Flex>
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