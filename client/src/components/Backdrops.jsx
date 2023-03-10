import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import tmdbConfig from '../api/tmdb/tmdb.config';
import './styles/slides.css'
const Backdrops = ({ data }) => {
    return (
            <Box w='90vw' m='auto'>
             <Heading fontWeight={'md'} py='1rem'>BACKDROPS</Heading>

          <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              grabCursor='true'
              navigation
          >
              {
                  data?.length > 0 && data?.map((el, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <Image src={tmdbConfig.backdropImgUrl(el.file_path)} h='80vh' w='100%' objectFit={'cover'} />
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
            </Box>
  )
}

export default Backdrops