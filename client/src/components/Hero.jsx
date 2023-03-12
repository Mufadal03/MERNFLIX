import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import tmdbConfig from '../api/tmdb/tmdb.config'
import { generateUrl } from '../utils/genrateUrl'
import { genres } from '../utils/genreDb'
import HeroLoading from './Loaders/HeroLoading'
import { AiFillCaretRight,AiOutlineInfoCircle } from 'react-icons/ai'
import GenreTypeCard from './GenreTypeCard'
import PlayTrailer from './PlayTrailer'
const Hero = () => {
  const {isOpen,onClose,onOpen} = useDisclosure()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const { mediaType } = useParams()
  const [seachParams] = useSearchParams()
  const location = useLocation()
  const category = seachParams.get('category')
  const navigate = useNavigate()
  const page = 1
  useEffect(() => {
    const FetchMedia = async () => {
      try {
        setLoading(true)
        const medias = ['tv', 'movie']
        const customMediaType = medias[Math.floor(Math.random() * 2)]
        const response = await (location.pathname==='/'?mediaApi.getTrendingList({ mediaType:customMediaType, timeWindow: 'day' }):generateUrl(category,mediaApi,page,genres,mediaType))
        const index = Math.floor(Math.random() * 5)
        const details = await mediaApi.getDetail({ mediaType: mediaType || customMediaType, mediaId: response.results[index].id })
        console.log(details)
        setLoading(false)
        setData({
          id: details.id,
          mediaType:details.release_date?"movie":'tv',
          backdrop: details.backdrop_path,
          genres: details.genres,
          description: details.overview,
          runtime: details.runtime || details.episode_run_time[0],
          release_date:details.release_date || details.first_air_date,
          title: details.title || details.name,
          tagline:details.tagline,
          rating: details.vote_average,
          video: details.video.results,
          language:details.spoken_languages[0].english_name
        })
      } catch (error) {
        console.log('show error on toast',error)
      }
    }
    FetchMedia()
  }, [mediaType, location,seachParams,page])
  if (loading) return <HeroLoading />
  console.log(data)
    return (
      <Box h='100vh'>
            <Flex justifyContent={'center'} alignItems='center' h='100vh' style={{backgroundImage:`linear-gradient(to right,rgb(0, 0, 0), rgba(0, 0, 0, 0)) , url(${tmdbConfig.backdropImgUrl(data?.backdrop)})`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <Flex alignItems={'center'} w='95%' h='90%' color='white'>
                <Flex direction={'column'} w='50%' gap='1rem'>
              <Flex direction={'column'} gap='.3rem'>
                <Heading fontSize={'6xl'}>{data?.title}</Heading>
              <Text fontStyle={'italic'} fontSize='lg' color='rgba(115, 114, 114, 0.5)'>{data?.tagline }</Text>
                </Flex>
                <Text fontSize={'lg'} fontStyle='italic'>{data?.description}</Text>
                <Flex gap='.5rem' alignItems={'center'}>
                  {
                
                    data?.genres.map((el,i) => i<data?.genres.length-1?<><GenreTypeCard bg='transparent' key={el.id} name={ el.name} /><Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text></>:<GenreTypeCard bg='transparent'  key={el.id} name={ el.name} />)
                  }
                </Flex>
                <Flex gap='1rem'>
                  <Button size={'lg'} leftIcon={<AiFillCaretRight />} bgColor='rgba(115, 114, 114, 0.5)' border='1px solid rgba(115, 114, 114, 0.5)' onClick={onOpen} _hover={{ backgroundColor: 'transparent' }} fontSize='lg'>Play trailer</Button>
                  <Button size={'lg'}leftIcon={<AiOutlineInfoCircle/>} bgColor='rgba(115, 114, 114, 0.5)' border='1px solid rgba(115, 114, 114, 0.5)' onClick={()=>navigate(`/detail/${mediaType || data?.mediaType}/${data?.id}`)}  _hover={{backgroundColor:'transparent'}} fontSize='lg'>More Info</Button>
                </Flex>
                </Flex>
              </Flex>
        </Flex>
        <PlayTrailer isOpen={isOpen} onClose={onClose} videos={data?.video}/>
      </Box>
  )
}

export default Hero