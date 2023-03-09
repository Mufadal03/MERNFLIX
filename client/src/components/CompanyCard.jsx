import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import tmdbConfig from '../api/tmdb/tmdb.config'

const CompanyCard = ({ imgUrl, name }) => {
    
  return (
      <Flex direction={'column'} gap='.8rem' border={'1px solid rgba(115, 114, 114, 0.5)'} borderRadius='lg' p='2' alignItems='center' >
          {imgUrl && <Box bgImage={`url(${tmdbConfig.companyImgUrl(imgUrl)})`} h='100px' w='150px' bgPos={'center'} bgSize='cover' objectFit={'cover'}></Box>}
          <Text>{name }</Text>
    </Flex>
  )
}

export default CompanyCard