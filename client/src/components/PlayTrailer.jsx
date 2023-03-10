import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube';
import './styles/modal.css'
const PlayTrailer = ({ isOpen, onClose, videos }) => {
  const [trailer, setTrailer] = useState()
  const [videoIndex, setVideoIndex] = useState(0)
  const playerRef = useRef()
    useEffect(() => {
        const video = videos?.filter((el) => el.type === 'Trailer')
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
      console.log('error')
      if(videoIndex<trailer.length)setVideoIndex((prev)=>prev+1)
  }
 
  return (
   <>

      <Modal className='modal' isCentered isOpen={isOpen} onClose={onClose} size='full' border='2px solid red'h='100vh' >
        <ModalOverlay backdropFilter='blur(10px)' />
        <ModalContent bgColor={'transparent'} h='100vh'  color='white'>
            {/* <ModalHeader><Text className='test'>trailer</Text></ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            {trailer?.length > 0 ? <YouTube className='Trailer_player'  videoId={trailer[videoIndex].key} opts={opts} onReady={onReadyFn} onError={onErrorFn} />:'TRAILER NOT FOUND'}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PlayTrailer