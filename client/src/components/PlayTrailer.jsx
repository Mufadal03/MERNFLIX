import {  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './styles/modal.css'
const PlayTrailer = ({ isOpen, onClose, videos }) => {
  const [trailer, setTrailer] = useState()
  const [videoIndex, setVideoIndex] = useState(0)
  useEffect(() => {
      let video = videos?.filter((el) => el.type === 'Trailer')
      if(video?.length===0)video = videos?.filter((el) => el.type === 'Clip')
        setTrailer(video)
    }, [videos])
  const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const onReadyFn = (e) => {
        console.log(e)
    }
  const onErrorFn = (e) => {
    if (videoIndex < trailer.length) setVideoIndex((prev) => prev + 1)
    else if (videoIndex >= trailer.length) {
      const teasers = videos?.filter((el) => el.type === 'Teaser')
      setTrailer(teasers)
      setVideoIndex(0)
    }
    else console.log('error')
  }
  const onEndFn = (e) => {
    e.target.seekTo(0, false)
    e.target.pauseVideo()
  }
  return (
   <>

      <Modal className='modal' isCentered isOpen={isOpen} onClose={onClose} size='full' border='2px solid red'h='100vh' >
        <ModalOverlay backdropFilter='blur(10px)' />
        <ModalContent bgColor={'transparent'} h='100vh' color='white'>
            {/* <ModalHeader><Text className='test'>trailer</Text></ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            {trailer?.length > 0 ? <YouTube className='Trailer_player'  videoId={trailer[videoIndex]?.key} opts={opts} onReady={onReadyFn} onEnd={onEndFn} onError={onErrorFn} />:'TRAILER NOT FOUND'}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PlayTrailer