import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import tmdbConfig from '../api/tmdb/tmdb.config'

const CompanyCard = ({ imgUrl, name }) => {
    
  return (
      <Flex direction={'column'} gap='.8rem' border={'1px solid rgba(115, 114, 114, 0.5)'} borderRadius='lg' p='2' alignItems='center' bgColor={'rgba(80, 79, 79, 0.5)'}>
          {imgUrl && <Box  bgImage={`url(${tmdbConfig.companyImgUrl(imgUrl)})`} h='80px' w='100px' bgPos={'center'} bgSize='contain' bgRepeat={'no-repeat'} objectFit={'cover'}></Box>}
          <Text>{name }</Text>
    </Flex>
  )
}

export default CompanyCard