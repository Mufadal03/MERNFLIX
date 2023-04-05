import { Box, CircularProgress, CircularProgressLabel, Flex, Image,Icon, Text, Button, useDisclosure, VStack, useToast } from '@chakra-ui/react'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { AiOutlinePlus,AiFillHeart, AiOutlineHeart ,AiOutlinePercentage,AiFillCaretRight} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {MdOutlineReviews} from 'react-icons/md'
import {useLocation, useNavigate, useParams } from 'react-router-dom'
import { addToFavourite, getFavourites, removeFavourite } from '../redux/actions'
import mediaApi from '../api/modules/media.api'
import tmdbConfig from '../api/tmdb/tmdb.config'
import CompanyCard from '../components/MediaDetail/CompanyCard'
import GenreTypeCard from '../components/Common/GenreTypeCard'
import Cast from '../components/MediaDetail/Cast'
import PlayTrailer from '../components/Common/PlayTrailer'
import Backdrops from '../components/MediaDetail/Backdrops'
import Posters from '../components/MediaDetail/Posters'
import Recommendation from '../components/MediaDetail/Recommendation'
import HeroLoading from '../components/Loaders/HeroLoading'
import Reviews from '../components/MediaDetail/Reviews'
import MovieClips from '../components/MediaDetail/MovieClips'
const MediaDetail = () => {
  const { mediaType, mediaId } = useParams()
  const [data, setData] = useState() 
  const [loading, setLoading] = useState(false)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const toast = useToast()
  const [favourite, setFavourite] = useState(false)
  const reviewRef = useRef()
  const { isAuth } = useSelector((state) => { 
    return {
      isAuth: state.isAuth,
    }
  })
  const fetchMedia = async () => {
    setLoading(true)
    try {
      const response = await mediaApi.getDetail({ mediaType, mediaId })
      setData(response)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const handleFavourite = async() => {
    if (!isAuth) {
      navigate('/account/login', {
        state:{from:location}
      })
      return
    }
    
    const media = {}
    data?.release_date && (media.release_date = data.release_date)
    data?.poster_path && (media.poster_path = data.poster_path)
    data?.genres && (media.genre_ids = [data?.genres[0].id])
    data?.first_air_date && (media.first_air_date = data.first_air_date)
    data?.id && (media.id = data.id)
    data?.title && (media.title = data.title)
    data?.name && (media.title = data.name)
    try {
      if (favourite) {
        const res = await dispatch(removeFavourite(data.id))
         toast({
        title: res.response,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
      setFavourite(false)
      return
    }
      const res = await dispatch(addToFavourite({ data: media }))
      toast({
        title: res.response,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
      setFavourite(true)
    } catch (error) {
      console.log(error)
    }
  }
  const checkIsFav = async() => {
      if (isAuth) {
        const favourites= await dispatch(getFavourites())
        const result = favourites.find((el) =>el.id == mediaId)
        if (result) setFavourite(true)
        else setFavourite(false)
      }
  }
 

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMedia()
    checkIsFav()
  }, [mediaId,mediaType])
  

  if (loading) return <HeroLoading /> 
  
  return (
    <Box pb='2rem' bgColor={'black'}color='white' fontFamily={'bebas'} >
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
            <VStack alignItems={'left'} gap='.5rem'>
              <Text fontSize={'4xl'}>{data?.title || data?.name}</Text>
              <Flex alignItems={'center'} gap='.5rem' flexWrap={'wrap'} >
                <Text>{(() => {
                  let date = data?.release_date || data?.first_air_date
                  return `${date?.split('-').reverse().join('/')} (${data?.production_countries?.length>0 &&data?.production_countries[0]?.iso_3166_1})`
                })()}</Text>
                <Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text>
                <Flex gap='.2rem'>
                  {
                    data?.genres?.map((el) => <GenreTypeCard key={el.id} name={ el.name} />)
                  }
                </Flex>
                <Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text>
                <Text display={data?.number_of_episodes ? 'block':'none'}>{data?.number_of_episodes ? `${data?.number_of_seasons} Season ${data?.number_of_episodes} Episodes` : ""}</Text>
                <Text display={data?.number_of_episodes ? 'block':'none'}as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text>
                  
                <Text>
                  {
                    (() => {
                      let runTime = data?.runtime || (data?.episode_run_time?.length>0 && data?.episode_run_time[0])
                      let hr = runTime?Math.floor(runTime/60):0
                      let min = runTime?Math.floor(runTime%60):0
                      min = hr === 0 ? `${min}mins` : `${hr}hr ${min}mins`
                      return mediaType==='tv'?`${min} per episode`:min
                    })()
                  }
                </Text>
              </Flex>
            </VStack>
            <Flex  gap='2rem' alignItems={'center'}>
              {/* rating */}
                  <Flex alignItems={'center'} gap='.2rem'>
                    <CircularProgress value={data?.vote_average*10} size={'70px'} thickness='5px' color='green.500'>
                  <CircularProgressLabel>{Math.floor(data?.vote_average * 10)}<Icon h='4' w='4'as={AiOutlinePercentage } /></CircularProgressLabel>
                  </CircularProgress>
                  <Text fontSize={'md'} color='white'>User <br/>Score</Text>
                  </Flex>
              {/* rating */}
              {/* icons button */}
                 <Flex alignItems={'center'} gap='1rem'>
                <Icon as={AiOutlinePlus} cursor='pointer' h='10' w='10' borderRadius='full' bgColor={'rgba(115, 114, 114, 0.5)'} p='10px' />
                  <Icon as={favourite?AiFillHeart:AiOutlineHeart} color={favourite?'red':'white'} onClick={handleFavourite} cursor='pointer' h='10' w='10' borderRadius='full' bgColor={'rgba(115, 114, 114, 0.5)'} p='10px'/>
                  <a href='#review'><Icon as={MdOutlineReviews} onClick={()=>console.log(reviewRef)} cursor='pointer' h='10' w='10' borderRadius='full' bgColor={'rgba(115, 114, 114, 0.5)'} p='10px'/></a>
                 </Flex>
              {/* icons button */}
              {/* watch trailer  button */}
                <Button leftIcon={<AiFillCaretRight/>} bgColor='rgba(115, 114, 114, 0.5)' border='1px solid rgba(115, 114, 114, 0.5)' onClick={onOpen} _hover={{backgroundColor:'transparent'}} fontSize='md' fontWeight={'md'}>Play trailer</Button>
              {/* watch trailer  button */}
              {/* play trailer modal */}
              <PlayTrailer isOpen={isOpen} onClose={onClose} videos={data?.video?.results} />
            {/* play trailer modal */}


            </Flex>
            <Text fontSize={'lg'} fontStyle={'italic'} color='gray'>{data?.tagline}</Text>
            <Flex direction={'column'} gap='.5rem'>
              <Text fontSize={'lg'} fontWeight='bold'>Overview</Text>
              <Text fontSize={'md'} fontStyle='italic'>{data?.overview }</Text>
            </Flex>
            <Box>
            <Text fontSize={'md'} fontWeight='bold'>Watch Provider</Text>
              <Flex gap='.5rem' mt='.4rem' flexWrap={'wrap'}>
                   {
                  mediaType === 'tv' ? data?.networks?.slice(0,4).map((el) => <CompanyCard key={el.provider_id} name={el.name} imgUrl={el.logo_path} />)
                    : data?.watchProvider?.results?.IN?.flatrate ?data?.watchProvider?.results?.IN?.flatrate.slice(0,4).map((el) => <CompanyCard key={el.provider_id} imgUrl={el.logo_path} name={el.provider_name} />) :data?.watchProvider?.results?.IN?.rent?data?.watchProvider?.results?.IN?.rent?.slice(0,4).map((el) => <CompanyCard key={el.provider_id} imgUrl={el.logo_path} name={el.provider_name} />):''
                  }  
            </Flex>
            </Box>
              <Text fontSize={'lg'} fontWeight='bold'>Productions</Text>
            <Flex gap='.5rem'>
                  {
                data?.production_companies?.slice(0,5).map((el) => <CompanyCard key={el.id} imgUrl={ el.logo_path} name={el.name} />)
                  }
            </Flex>
        </Flex>
        {/* media container */}
     
        </Flex>
      </Flex>
      <Flex direction={'column'} gap='1rem' > 
        {/* MovieClips */}
        {/* <MovieClips data={data?.video?.results.slice(0,5) } /> */}
        {data?.video?.results?.length>0 &&  <MovieClips data={data?.video?.results.slice(0,5) }/>}
        {/* MovieClips */}

      {/* backdrops */}
      <Backdrops data={data?.images?.backdrops?.slice(0,10) } />
      {/* backdrops */}
      {/* Posters */}
      <Posters data={data?.images?.posters?.slice(0,15) } />
      {/* Posters */}

      {/* Cast */}
      {data?.credits?.cast?.length > 0 && <Cast casts={data.credits.cast} />}
        {/* Cast */}
        
        {/* Reviews */}
        <Reviews mediaName={data?.name || data?.title} />
        {/* Reviews */}
        
        {/* you may also like */}
       { data?.recommendation?.length>0 && <Recommendation  data={data?.recommendation } />}
        {/* you may also like */}
      </Flex>
    </Box>
  )
}

export default MediaDetail