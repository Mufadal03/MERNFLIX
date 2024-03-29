import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MediaCard from '../Common/MediaCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import RowLoading from '.././Loaders/RowLoading';
import '.././styles/slides.css'
const GenreRow = ({ title, api ,to}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.then((res) => {
            let medias = res?.results ? res.results : res
            setData(medias)
            setLoading(false)
        }).catch((err)=>console.log(err))
    }, [api])
  
  return (
      <Box>
          <Flex justifyContent={'space-between'} py='.5rem' fontFamily={'bebas'}>
              <Text textTransform={'capitalize'} fontSize={{base:'sm',md:'sm',lg:'md'}}>{title}</Text>
              <Text mr='1rem' fontSize={{ base: 'sm', md: 'sm', lg: 'md' }} ><Link to={ to} state={{from :'home'}}> Explore all</Link></Text>
          </Flex>
          {
              loading?<RowLoading />: <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={8}
              navigation
              breakpoints={{
                  100: {
                       slidesPerView: 3,
                        spaceBetween: 10,
                  },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                  },
                  1025: {
                      slidesPerView: 8, 
                      spaceBetween:10
                    }
        }}
          >
              {
                  data?.length > 0 && data?.map((el, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <MediaCard data={el} />
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
         }
      </Box>
  )
}

export default GenreRow