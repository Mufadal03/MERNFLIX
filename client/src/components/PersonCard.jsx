import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import tmdbConfig from '../api/tmdb/tmdb.config'
import defaultAvatar from '../utils/avatar.png'
const PersonCard = ({ data }) => {
  return (
      <>
          <Flex bgImage={data?.profile_path ? tmdbConfig.posterImgUrl(data.profile_path) : defaultAvatar} objectFit='contain' h='200px' w='150px' bgPos={'center'} bgSize='cover' borderRadius={'base'} alignItems='flex-end' justifyContent={'space-between'} direction='column'>
              <Text p='.3rem' bgColor={'rgba(15, 14, 14, 0.5)'} color='white' w='100%' textAlign={'center'}>
                  {data?.character}
              </Text>
              <Text p='.3rem' bgColor={'rgba(15, 14, 14, 0.5)'} color='white' w='100%' textAlign={'center'}>
                  {data?.name}
              </Text>
           </Flex>
    </>
  )
}

export default PersonCard