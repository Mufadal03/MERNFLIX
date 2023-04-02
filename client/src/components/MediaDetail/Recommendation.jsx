import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { A11y, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MediaCard from '../Common/MediaCard'

const Recommendation = ({data}) => {
  return (
      <Box w='90vw' m='auto'>
          <Flex justifyContent={'space-between'} py='.5rem'>
              <Text textTransform={'capitalize'} fontFamily='bebas' fontSize={{base:'sm',md:'md',lg:'lg'}}>you may also like</Text>
          </Flex>
          <Swiper
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
      </Box>
  )
}

export default Recommendation