import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import 'animate.css';
const HeroLoading = () => {
  return (
    <Flex justifyContent={'center'} alignItems='center' minH='100vh' bgColor={'black'}>
      <Image className='animate__animated animate__slideInLeft' src='https://fontmeme.com/permalink/230305/45fcbc47916afa4eed29a10ff819946b.png' alt='Hero Loading'/>
    </Flex>
  )
}

export default HeroLoading