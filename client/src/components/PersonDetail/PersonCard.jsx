import {  Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import tmdbConfig from '../../api/tmdb/tmdb.config'
import defaultAvatar from '../../utils/avatar.png'
const PersonCard = ({ data }) => {
  return (
      <>
          <Link to={`/person/${data?.id}`}>
              <Flex borderRadius={'base'}direction='column'>
              <Text p='.3rem' bgColor={'rgba(15, 14, 14, 0.5)'} color='white' w='100%' textAlign={'center'}>
                  {data?.name}
              </Text>
                  <Image src={data?.profile_path ? tmdbConfig.posterImgUrl(data?.profile_path):defaultAvatar} />
              <Text p='.3rem' bgColor={'rgba(15, 14, 14, 0.5)'} color='white' w='100%' textAlign={'center'}>
                  {data?.character}
              </Text>
              </Flex>
          </Link>
    </>
  )
}

export default PersonCard