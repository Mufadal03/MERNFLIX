import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import tmdbConfig from '../../api/tmdb/tmdb.config';
import '.././styles/slides.css'
const Posters = ({ data }) => {
  return (
    (
              <Box  w='90vw' m='auto'>
              <Heading fontWeight={'md'} fontSize='3xl' fontFamily={'bebas'} py='1rem'>Posters</Heading>
          <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={5}
              grabCursor='true'
              navigation
          >
              {
                  data?.length > 0 && data?.map((el, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <Image src={tmdbConfig.posterImgUrl(el.file_path)} />
                          </SwiperSlide>
                      )
                  })
              }
                  </Swiper>
        </Box>
  )
  )
}

export default Posters