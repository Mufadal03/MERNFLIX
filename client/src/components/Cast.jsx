import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import PersonCard from './PersonCard'
import { useParams } from 'react-router-dom';

const Cast = ({ casts }) => {
    const {mediaType} = useParams()
  return (
          <Box w='90vw' m='auto'>
              <Heading fontWeight={'md'} mb='2rem' textTransform={'capitalize'}>{mediaType==='tv'?"Series":mediaType } Cast</Heading>
           <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={8}
              navigation
          >
              {
                  casts?.length > 0 && casts?.map((el, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <PersonCard data={el} />
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
          </Box>
  )
}

export default Cast