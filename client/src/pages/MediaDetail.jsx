import { Box, CircularProgress, CircularProgressLabel, Flex, Image,Icon, Text, Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import tmdbConfig from '../api/tmdb/tmdb.config'
import CompanyCard from '../components/CompanyCard'
import GenreTypeCard from '../components/GenreTypeCard'
import { AiOutlinePlus, AiOutlineHeart ,AiOutlinePercentage,AiFillCaretRight} from 'react-icons/ai'
import {MdOutlineReviews} from 'react-icons/md'
import Cast from '../components/Cast'
import PlayTrailer from '../components/PlayTrailer'
import Backdrops from '../components/Backdrops'
import Posters from '../components/Posters'
import MovieClips from '../components/MovieClips'
import Recommendation from '../components/Recommendation'
const MediaDetail = () => {
  const { mediaType, mediaId } = useParams()
  const [data, setData] = useState() 
  const [loading, setLoading] = useState(false)
  const {isOpen,onClose,onOpen} = useDisclosure()
  useEffect(() => {
    setLoading(true)
    mediaApi.getDetail({ mediaType, mediaId }).then(res => {
      console.log(res)
      setData(res)
      setLoading(false)
   }).catch(err =>console.log('show err on toast'))
  }, [mediaId,mediaType])
  
  if(loading)return <h1>Loading........</h1>
  return (
    <Box>
      <Flex justifyContent={'center'} alignItems='center' minH='100vh' style={{ backgroundImage: `linear-gradient(180deg, rgba(34,193,195,0) 0%, rgba(0,0,0,0.9024859943977591) 53%) , url(${tmdbConfig.backdropImgUrl(data?.backdrop_path)})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* media container */}
        <Flex  w='90%' m='5rem auto'>
          {/* left side */}
        <Flex  w='30%' >
            <Image h='500px' borderRadius={'xl'}  src={tmdbConfig.posterImgUrl(data?.poster_path)} />
          </Flex>
          {/* left side */}

          {/* right side */}
          <Flex pl='1rem' gap='1rem' w='70%' color={'#FFFFFF'} direction='column'>
            <Box >
              <Text fontSize={'5xl'}>{data?.title || data?.name}</Text>
              <Flex alignItems={'center'} gap='.5rem'>
                <Text>{(() => {
                  let date = data?.release_date || data?.first_air_date
                  return `${date?.split('-').reverse().join('/')} (${data?.production_countries[0]?.iso_3166_1})`
                })()}</Text>
                <Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text>
                <Flex gap='.2rem'>
                  {
                    data?.genres.map((el) => <GenreTypeCard key={el.id} name={ el.name} />)
                  }
                </Flex>
                <Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text>
                <Text>{data?.number_of_episodes ? `${data?.number_of_seasons} Season ${data?.number_of_episodes} Episodes` : ""}</Text>
                <Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text>
                  
                <Text>
                  {
                    (() => {
                      let runTime = data?.runtime || (data?.episode_run_time?.length>0 && data?.episode_run_time[0])
                      let hr = runTime?Math.floor(runTime/60):0
                      let min = runTime?Math.floor(runTime%60):0
                      return hr===0?`${min}mins`:`${hr}hr ${min}mins`
                    })()
                  }
                </Text>
              </Flex>
            </Box>
            <Flex  gap='2rem' alignItems={'center'}>
              {/* rating */}
                  <Flex alignItems={'center'} gap='.2rem'>
                    <CircularProgress value={data?.vote_average*10} size={'70px'} thickness='5px' color='green.500'>
                  <CircularProgressLabel>{Math.floor(data?.vote_average * 10)}<Icon h='4' w='4'as={AiOutlinePercentage } /></CircularProgressLabel>
                  </CircularProgress>
                  <Text fontSize={'md'} fontWeight='semibold' color='white'>User <br/>Score</Text>
                  </Flex>
              {/* rating */}
              {/* icons button */}
                 <Flex alignItems={'center'} gap='1rem'>
                <Icon as={AiOutlinePlus} h='10' w='10' borderRadius='full' bgColor={'rgba(115, 114, 114, 0.5)'} p='10px' />
                  <Icon as={AiOutlineHeart} h='10' w='10' borderRadius='full' bgColor={'rgba(115, 114, 114, 0.5)'} p='10px'/>
                  <Icon as={MdOutlineReviews} h='10' w='10' borderRadius='full' bgColor={'rgba(115, 114, 114, 0.5)'} p='10px'/>
                 </Flex>
              {/* icons button */}
              {/* watch trailer  button */}
                <Button leftIcon={<AiFillCaretRight/>} bgColor='rgba(115, 114, 114, 0.5)' border='1px solid rgba(115, 114, 114, 0.5)' onClick={onOpen} _hover={{backgroundColor:'transparent'}} fontSize='md'>Play trailer</Button>
              {/* watch trailer  button */}
              {/* play trailer modal */}
              <PlayTrailer isOpen={isOpen} onClose={onClose} videos={data?.video?.results} />
            {/* play trailer modal */}


            </Flex>
            <Text fontSize={'lg'} fontStyle={'italic'} color='gray'>{data?.tagline}</Text>
            <Flex direction={'column'} gap='.5rem'>
              <Text fontSize={'xl'} fontWeight='bold'>Overview</Text>
              <Text fontSize={'lg'} fontStyle='italic'>{data?.overview }</Text>
            </Flex>
            <Box>
            <Text fontSize={'xl'} fontWeight='bold'>Watch Provider</Text>
              <Flex gap='.5rem' mt='.4rem'>
                   {
                  mediaType === 'tv' ? data?.networks?.map((el) => <CompanyCard key={el.provider_id} name={el.name} imgUrl={el.logo_path} />)
                    : data?.watchProvider.results.IN?.flatrate ?data?.watchProvider.results.IN?.flatrate.map((el) => <CompanyCard key={el.provider_id} imgUrl={el.logo_path} name={el.provider_name} />) :data?.watchProvider.results.IN?.rent?data?.watchProvider.results.IN?.rent.map((el) => <CompanyCard key={el.provider_id} imgUrl={el.logo_path} name={el.provider_name} />):''
                  }  
            </Flex>
            </Box>
              <Text fontSize={'xl'} fontWeight='bold'>Production</Text>
            <Flex gap='.5rem'>
                  {
                data?.production_companies.slice(0,5).map((el) => <CompanyCard key={el.id} imgUrl={ el.logo_path} name={el.name} />)
                  }
            </Flex>
        </Flex>
        {/* media container */}
     
        </Flex>
      </Flex>
      <Flex direction={'column'} gap='1rem' bgColor={'black'} color='white'> 
        {/* MovieClips */}
        {data?.video?.results.length>0 && <MovieClips data={data?.video?.results.slice(0,5) } />}
        {/* MovieClips */}

      {/* backdrops */}
      <Backdrops data={data?.images?.backdrops.slice(0,10) } />
      {/* backdrops */}
      {/* Posters */}
      <Posters data={data?.images?.posters.slice(0,15) } />
      {/* Posters */}

      {/* Cast */}
      {data?.credits?.cast.length > 0 && <Cast casts={data.credits.cast} />}
        {/* Cast */}
        
        {/* you may also like */}
        <Recommendation data={data?.recommendation } />
        {/* you may also like */}

        

      </Flex>
    </Box>
  )
}

export default MediaDetail