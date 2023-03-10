import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { A11y, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieCard from './MovieCard'

const Recommendation = ({data}) => {
  return (
      <Box w='90vw' m='auto'>
          <Flex justifyContent={'space-between'} py='.5rem'>
              <Text textTransform={'capitalize'}>YOU MAY ALSO LIKE</Text>
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

export default Recommendation