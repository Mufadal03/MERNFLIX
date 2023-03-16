import { HStack, Text, Icon, Link } from '@chakra-ui/react'
import {AiFillHeart,AiFillGithub} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <HStack bgColor={'black'} justifyContent='center' color='white' py='1rem'>
      <Text>Made with </Text><Icon color='red' as={AiFillHeart} /><Text>by <Link href='http://mufadal03.github.io' isExternal>Mufadal Sadri</Link></Text><Link href='https://github.com/Mufadal03' isExternal ><Icon h='5' w='5' as={AiFillGithub}/></Link>
    </HStack>
  )
}

export default Footer