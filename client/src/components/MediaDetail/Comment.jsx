import { Avatar, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Comment = ({ data }) => {
 const [date,setDate] = useState('')
  useEffect(() => {
    const d = new Date(data.createdAt)
    // console.log(Date.now(d))
    // console.log(Date.now())
    // console.log(d)
    // console.log(new Date(Date.now()))
    setDate(d)
  },[data])
  return (
   <Flex gap='.5rem' py='1rem'>
          <Avatar size={'sm'} name={ data.author.username} />
          <Flex direction={'column'} gap='.5rem'>
        <Text fontSize={'sm'}>{data.author.username}
          <Text as='span' fontSize={'xs'} fontWeight='thin' color='gray'>{data.createdAt}</Text>
          </Text>
             <Text fontSize={'sm'}>{data.comment}</Text>
          </Flex>
   </Flex>
  )
}

export default Comment