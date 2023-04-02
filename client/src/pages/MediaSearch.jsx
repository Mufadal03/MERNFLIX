import { Box, Flex, Grid, GridItem, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import mediaApi from '../api/modules/media.api'
import LoadMore from '../components/Common/LoadMore'
import MediaCard from '../components/Common/MediaCard'
import PersonCard from '../components/PersonDetail/PersonCard'
const searchCategory = ['movie','tv','person']
const MediaSearch = () => {
  const [category, setCategory] = useState(searchCategory[0])
  const inputRef = useRef() 
  const [page, setPage] = useState(1)
  const [totalPages,setTotalPages]=useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [data,setData] = useState([])
  useEffect(() => {
    inputRef.current.focus()
      window.scrollTo(0, 0);
  }, [])

  const getReleaseDate = (media) => {
    const date = media.release_date ? new Date(media.release_date) : new Date(media.first_air_date);
    return date.getTime();
  }

  const getSearch = async(query) => {
    if (query.length === 0) {
      setData([])
      return
    }
    try {
      const response = await mediaApi.getSearch({ mediaType: category, query: searchQuery, page })
      const latest_result = category==='person'?response.results:response.results.sort((a, b) => getReleaseDate(b) - getReleaseDate(a))
      setTotalPages(response.total_pages)
      page>1?setData((prev)=>[...prev,...latest_result]):setData(latest_result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    let debounce = setTimeout(() => {
      getSearch(searchQuery)
    },500)
    return ()=>clearTimeout(debounce)
  }, [searchQuery,page,category])
  
  useEffect(() => {
    setPage(1)
  },[category])

  return (
      <Box minH='100vh' bgColor={'black'} color='white' fontFamily={'bebas'}>
          <Flex  pt='70px' w='90vw' m='auto' gap='1rem' alignItems={'center'}>
            <Input onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} ref={inputRef} type={'search'} w='90%' placeholder={`Type to search for ${category}`} borderRadius={'base'} size='lg'/>
            <Select onChange={(e)=>setCategory(e.target.value)} w='content-fit' color={'white'} fontSize='lg' size={'lg'} textTransform={'capitalize'}>
              {
                searchCategory.map((el,i)=>{
                  return (
                    <option key={i} style={{backgroundColor:'rgba(1,1,1,1)'}} value={el}>{el }</option>
                  )
                })
              }
            </Select>
      </Flex>
      <Grid w='95vw' py='2rem' m='auto' gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(4,1fr)',lg:'repeat(5,1fr)'}} gap='.5rem'>
        {
         data?.length > 0 && data?.map((el,i) => {
          return (
            <GridItem key={i}>
              {(category === 'movie' || category === 'tv') ? <MediaCard titleFontSize={'xl'} titleLength={35} dateFontSize={'lg'} genreFontSize={'lg'} data={el} /> :<PersonCard data={el} />}
            </GridItem>
             )
          })
        }
      </Grid>
     { data.length>0 && totalPages && page<totalPages && <LoadMore onClick={()=>setPage(prev=>prev+1)}/>}
    </Box>
  )
}

export default MediaSearch