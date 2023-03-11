import { Box, Flex } from '@chakra-ui/react'
import React  from 'react'
import PersonAbout from '../components/PersonAbout'
import PersonMedia from '../components/PersonMedia'

const PersonDetail = () => {
  return (
    <Box bgColor={'black'} minH='100vh' color={'white'} >
      <Flex direction={'column'} w='90vw' m='auto'>
        <PersonAbout />
        <PersonMedia />
      </Flex>      
    </Box>
  )
}

export default PersonDetail