import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import dayjs from 'dayjs'
const Comment = ({ data }) => {
  return (
   <Flex gap='.5rem' py='1rem'>
          <Avatar size={'sm'} name={ data.author.username} />
          <Flex direction={'column'} gap='.5rem'>
        <Flex alignItems={'center'} gap='.5rem'> 
          <Text fontSize={'sm'}>{data.author.username}</Text>
          <Text as='span' fontSize={'xs'} fontWeight='thin' color='gray'>{dayjs(data.createdAt).format("DD-MM-YYYY HH:mm:ss")}</Text>
            </Flex>
          <Text fontSize={'sm'}>{data.comment}</Text>
          </Flex>
   </Flex>
  )
}

export default Comment