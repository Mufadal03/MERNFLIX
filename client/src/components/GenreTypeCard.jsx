import { Text } from '@chakra-ui/react'
import React from 'react'

const GenreTypeCard = ({name}) => {
  return (
      <Text p={'2px 6px '} border={'1px solid rgba(115, 114, 114, 0.5)'} style={{ backgroundImage: `linear-gradient(190deg, rgba(34,193,195,0) 0%, rgba(0,0,0,0.9024859943977591) 100%)` }}  fontSize='md'>{name}</Text>
  )
}

export default GenreTypeCard