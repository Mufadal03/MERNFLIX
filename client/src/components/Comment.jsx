import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({ data }) => {
  return (
   <Flex gap='.5rem' py='1rem'>
          <Avatar size={'sm'} name={ data.username} />
          <Flex direction={'column'} gap='.5rem'>
              <Text fontSize={'sm'}>{data.username}  <Text as='span' fontSize={'xs'} fontWeight='thin' color='gray'>{data.time }</Text></Text>
             <Text fontSize={'sm'}>{data.comment}</Text>
          </Flex>
   </Flex>
  )
}

export default Comment