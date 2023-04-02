import { Text } from '@chakra-ui/react'
import React from 'react'

const GenreTypeCard = ({ name,bg }) => {
  return (
    <Text p={'2px 6px '} bgColor={bg ||"rgba(115, 114, 114, 0.5)"} border={bg?'none':'1px solid rgba(115, 114, 114, 0.5)'}   fontSize='sm'>{name}</Text>
  )
}

export default GenreTypeCard