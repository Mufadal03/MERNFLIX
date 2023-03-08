import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const GenreRow = ({ title, api }) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        api.then((res) => {
            setData([...res.results])
        }).catch((err)=>console.log(err))
    }, [])
    
  return (
      <Box>
          <Flex justifyContent={'space-between'} py='.5rem'>
              <Text textTransform={'capitalize'}>{title}</Text>
              <Text mr='1rem'>Explore all</Text>
          </Flex>
          <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={8}
              navigation
          >
              {
                  data?.length > 0 && data?.map((el, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <MovieCard data={el} />
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
      </Box>
  )
}

export default GenreRow