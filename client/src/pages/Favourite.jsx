import { Box, Grid, GridItem ,Heading,Icon} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MediaCard from '../components/Common/MediaCard'
import { getFavourites, removeFavourite } from '../redux/actions'
import {AiFillHeart} from 'react-icons/ai'
const Favourite = () => {
    const [media,setMedia] = useState([])
    const dispatch = useDispatch()
    const fetchMedia = async() => {
     try {
       const response = await dispatch(getFavourites())
       setMedia(response)
     } catch (error) {
      console.log(error)
     } 
  }
  const handleRemove = async(el) => {
    await dispatch(removeFavourite(el.id))
    fetchMedia()
  }
  useEffect(() => {
      fetchMedia()
    },[])
  return (
    <Box minH='100vh' bgColor='black' color={'white'}>
      <Box w='95vw' py='3rem' m='auto'>
        <Heading fontWeight={'md'} fontFamily='bebas' my='1rem'>Favourites</Heading>
          <Grid gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(4,1fr)',lg:'repeat(5,1fr)'}} gap='.5rem'>
        {
          media?.length > 0 && media?.map((el) => {
              return (
                <GridItem key={el.id} pos='relative' >
                  <MediaCard titleFontSize={'xl'} titleLength={35} dateFontSize={'lg'} genreFontSize={'lg'} data={el} />
                  <Icon top={1} right={1} pos='absolute' color='red' cursor={'pointer'} as={AiFillHeart} h={5} w={5} onClick={()=>handleRemove(el)} />
                </GridItem>
              )
            })
          }
        </Grid>
        </Box>
    </Box>
  )
}

export default Favourite