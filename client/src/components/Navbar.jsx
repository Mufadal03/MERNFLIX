import React, { useEffect, useRef } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const navOptions = [
    {
        id: 1,
        name: 'Home',
        link:'/'
    },
    {
        id: 2,
        name: 'TV Shows',
        link:'/media/tv'
    },
    {
        id: 3,
        name: 'Movies',
        link:'/media/movie'
    },
    {
        id: 4,
        name: 'New & Popular',
        link:'/media/popular'
    },
    {
        id: 5,
        name: 'My List',
        link:'/list'
    }
]
const Navbar = () => {
    const navRef = useRef()
    useEffect(() => {
        const scrollFn = () => {
            if (window.pageYOffset > 15) {
                navRef.current.style.backgroundColor = 'black'
            }
            if (window.pageYOffset < 15) {
                navRef.current.style.backgroundColor='transparent'
                
            }
        }
        window.addEventListener('scroll', scrollFn) 

    }, [])

    let activeStyle = {
    textDecoration: "underline",
  };  
  return (
      <Box pos={'absolute'} zIndex={10} >
           <Flex ref={navRef} style={{background: 'linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(36,36,36,1) 100%)'}} pos='fixed' top={0} w='100vw' alignItems={'center'} p='.6rem 2rem' color={'#E5E5E5'} >
          <Box>
              <Image h='40px' src='https://fontmeme.com/permalink/230305/45fcbc47916afa4eed29a10ff819946b.png' alt='Logo' />
          </Box>
          <Flex flexGrow='3' gap='1.5rem' pl='2rem'>
              {
                  navOptions.map((item) => {
                      return <NavLink style={({isActive})=>isActive?activeStyle:undefined} key={item.id} to={ item.link}>{ item.name}</NavLink>
                })
              }
          </Flex>
          <Flex  flexGrow={'2'} justifyContent={'flex-end'} gap='2rem' pr='2rem'>
              <Text>Search</Text>
              <Text>User Info</Text>
          </Flex>
    </Flex>
     </Box>
  )
}

export default Navbar