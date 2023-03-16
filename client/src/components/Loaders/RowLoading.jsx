import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const RowLoading = () => {
  return (
    <Flex h='100%' justifyContent='center' alignItems={'center'}>
      <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={8}
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
                  new Array(10).fill(0).map((el, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <Flex alignItems={'center'} h='268px' border="1px solid rgba(115, 114, 114, 0.5)">
                            <Image className='animate__animated animate__pulse' src='https://fontmeme.com/permalink/230305/45fcbc47916afa4eed29a10ff819946b.png' alt='loadingIMG'/>
                          </Flex>
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
      </Flex>
  )
}

export default RowLoading