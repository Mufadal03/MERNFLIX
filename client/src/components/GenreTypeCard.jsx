import { Text } from '@chakra-ui/react'
import React from 'react'

const GenreTypeCard = ({ name }) => {
  return (
    <Text p={'2px 6px '} bgColor="rgba(115, 114, 114, 0.5)" border={'1px solid rgba(115, 114, 114, 0.5)'}   fontSize='md'>{name}</Text>
  )
}

export default GenreTypeCard