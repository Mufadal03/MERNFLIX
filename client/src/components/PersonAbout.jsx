import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PersonApi from '../api/modules/person.api'
import tmdbConfig from '../api/tmdb/tmdb.config'

const PersonAbout = () => {
    const {personId} = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        const getDetails = async () => {
            try {
                const data = await PersonApi.getDetail({ personId })
                setData(data)
            } catch (error) {
                console.log('show err on toast')
            }
        }
        getDetails()
    },[personId])
  return (
      <Flex  m={'4rem auto'} border='1px solid rgba(115, 114, 114, 0.5)'  w='100%' p={'1rem'} borderRadius='base' > 
          <Box w='25%'bgImage={`url(${tmdbConfig.posterImgUrl(data?.profile_path)})`} h='500px' bgPos={'center'} bgSize='contain' bgRepeat={'no-repeat'} >
              {/* image */}
          </Box>
          <Flex w='75%' direction='column' gap='.5rem' p='1rem' fontFamily={'bebas'}>
              {/* details */}
              <Heading fontSize={'4xl'} fontFamily='bebas'>{data?.name}</Heading>
              <Text fontSize={'sm'} fontWeight='300'>{data?.biography }</Text>
          </Flex>
    </Flex>
  )
}

export default PersonAbout