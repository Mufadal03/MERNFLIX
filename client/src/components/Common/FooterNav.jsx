import { Box, Flex, Grid, GridItem, Text,Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome ,AiFillHome} from 'react-icons/ai'
import { FiMonitor ,FiUser} from 'react-icons/fi'
import {RiUser6Line,RiUser6Fill,RiMovieLine,RiMovieFill} from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
const navOptions = [
    {
        id: 1,
        name: 'Home',
        Icon: AiOutlineHome,
        filledIcon:AiFillHome,
        link:'/'
    },
    {
        id: 2,
        name: 'TV',
        Icon:FiMonitor,
        link:'/media/tv'
    },
    {
        id: 3,
        name: 'Movies',
        Icon: RiMovieLine,
        filledIcon:RiMovieFill,
        link:'/media/movie'
    },
    {
        id: 4,
        name: 'Account',
        filledIcon:RiUser6Fill,
        Icon:RiUser6Line,
        link:'/user'
    }
]
const FooterNav = () => {
    const { mediaType } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
  return (
      <Box display={{base:'block',sm:'none'}}>
           <Grid h='50px'  w='100%' gridTemplateColumns={'repeat(4,1fr)'} zIndex={2} pos={'fixed '} bottom='0' bgColor={'rgba(115, 114, 114,0.9)'} color='#2f2e2e' placeContent={'center'}>
          {
              navOptions.map((el) => {
                  return (
                      <GridItem key={el.id} >
                          <Flex onClick={()=>navigate(el.link)} alignItems={'center'} direction='column' 
                          textAlign='center' gap='2px'  color={location.pathname===el.link?'white':''} borderRadius='md' bgColor={location.pathname===el.link?'':'none'}>
                              <Icon as={location.pathname===el.link?el.filledIcon:el.Icon} h={5} w={5 } />
                              <Text fontSize={'xs'}>{el.name }</Text>
                          </Flex>
                      </GridItem>
                  )
              })
          }
    </Grid>
     </Box>
  )
}

export default FooterNav