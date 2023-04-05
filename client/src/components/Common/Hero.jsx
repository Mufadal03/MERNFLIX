import { Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import mediaApi from '../../api/modules/media.api'
import tmdbConfig from '../../api/tmdb/tmdb.config'
import HeroLoading from '.././Loaders/HeroLoading'
import { AiFillCaretRight,AiOutlineInfoCircle } from 'react-icons/ai'
import GenreTypeCard from './GenreTypeCard'
import PlayTrailer from './PlayTrailer'
const Hero = () => {
  const {isOpen,onClose,onOpen} = useDisclosure()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const { mediaType } = useParams()
  const [seachParams,setSearchParams] = useSearchParams()
  const location = useLocation()
  const genre = seachParams.get('genre')
  const [category,setCategory]= useState(genre || 'trending')
  const navigate = useNavigate()

  useEffect(() => {
    if (genre !== null) {
      setCategory(genre)
      console.log(genre, 'running genre changed')
    }
  }, [genre])

  useEffect(() => {
    setCategory('trending')
    console.log('running mediaType changed')
  }, [mediaType])
 
  
  useEffect(() => {
    FetchMedia()
    console.log('running category changed fetch')
  }, [location.pathname, category])
  
   const FetchMedia = async () => {
     try {   
       setLoading(true)
       console.log('fetching')
       const {response:hero} = await mediaApi.getHero({ mediaType:mediaType?mediaType:'', genre:category })
        setData({...hero})
        setLoading(false)
      } catch (error) {
        console.log('show error on toast',error)
      }
    }

  if (loading) return <HeroLoading />

    return (
      <Flex h='100vh' justifyContent={'center'} fontFamily='bebas' >

        <Flex w={{ base: '85vw', sm: '100vw' }} mt={{ base: '1.5rem', sm: '0' }} h={{ base: '85vh', sm: '100vh' }} bgImage={{ base: `url(${tmdbConfig.posterImgUrl(data?.poster)})`, sm: `url(${tmdbConfig.backdropImgUrl(data?.backdrop)})` }} bgPos='center' bgSize={'cover'} borderRadius={{ base: 'md', sm: 'none' }}>
          
          <Flex alignItems={{ base: 'flex-end', sm: 'center' }} py={{ base: '.5rem' }} w='100%' h='100%' px={{ base: '1%', sm: '2.5%' }} style={{ backgroundImage: `linear-gradient(240deg, rgba(34,193,195,0) 0%, rgba(0,0,0,0.9024859943977591) 90%)`}} >
            
            <Flex direction={'column'} w={{ base: '100%', sm: '70%', md: '60%',lg:'50%' }} gap='1.2rem'>
              
              <Flex direction={'column'} gap='.3rem' display={{ base: 'none', sm: 'block' }}>
                
                <Heading fontSize={'5xl'} fontFamily='bebas' >{data?.title}</Heading>

                <Text fontStyle={'italic'} fontSize='lg' color='rgba(115, 114, 114, 0.5)' >{data?.tagline}</Text>
                
                </Flex>
                <Text fontSize={'md'} fontStyle='' display={{base:'none',sm:'block',md:'block'}}>{data?.description}</Text>
                <Flex gap='.5rem' alignItems={'center'} justifyContent={{base:'center',sm:'flex-start'}}>
                  {
                
                    data?.genres.map((el,i) => data?.genres.length-1?<Flex key={el.id} alignItems={'center'}><GenreTypeCard bg='transparent' key={el.id} name={ el.name} /><Text as={'span'} h='5px' w='5px' bgColor='white' borderRadius={'full'}></Text></Flex>:<GenreTypeCard bg='transparent'  key={el.id} name={ el.name} />)
                  }
                </Flex>
                <Flex gap='1rem' justifyContent={{base:'center',sm:'flex-start'}}>
                  <Button fontWeight='md'  borderRadius={'sm'}size={{base:'md',md:'md'}} leftIcon={<AiFillCaretRight />} bgColor='rgba(115, 114, 114, 0.5)' border='1px solid rgba(115, 114, 114, 0.5)' onClick={onOpen} _hover={{ backgroundColor: 'transparent' }} >Play trailer</Button>
                  <Button fontWeight='md'  borderRadius={'sm'} size={{base:'md',md:'md'}}leftIcon={<AiOutlineInfoCircle/>} bgColor='rgba(115, 114, 114, 0.5)' border='1px solid rgba(115, 114, 114, 0.5)' onClick={()=>navigate(`/detail/${mediaType || data?.mediaType}/${data?.id}`)}  _hover={{backgroundColor:'transparent'}} fontSize='lg'>More Info</Button>
              </Flex>
              
            </Flex>
            
              </Flex>
              
        </Flex>
        <PlayTrailer isOpen={isOpen} onClose={onClose} videos={data?.video}/>
      </Flex>
  )
}

export default Hero