import React, { useEffect, useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './styles/modal.css'
import YouTube from 'react-youtube';
const MovieClips = ({ data }) => {
    const [clips, setClips] = useState()
    useEffect(() => {
        let DB = data?.filter(el=>el.type!=='Trailer')
        setClips(DB)
        console.log(DB)
    }, [data])
    if(clips?.length<=0)return 
    const onVideoEnd = (e) => {
    e.target.seekTo(0, false)
    e.target.pauseVideo()
    }
   return (
            <Box w='90vw' m='auto'>
             <Heading fontWeight={'md'} py='1rem'>CLIPS</Heading>

          <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              grabCursor='true'
              navigation
          >
              {
                  clips?.length > 0 && data?.map((el, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <YouTube className='Clips_player' onEnd={onVideoEnd} videoId={el.key } opts={{width:'100%',height:'100%'}} />
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
            </Box>
  )
}

export default MovieClips