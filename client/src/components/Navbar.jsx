import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import { userApi } from '../api/modules/user.api'

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
        id: 5,
        name: 'My List',
        link:'/list'
    }
]
const Navbar = () => {
    const navRef = useRef()
    
    const [username, setUsername] = useState(null)
    const [isAuth,setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false)
    const scrollFn = () => {
            if (window.pageYOffset > 15 && navRef.current) {
                navRef.current && (navRef.current.style.backgroundColor = 'black')
            }
            if (window.pageYOffset < 15 && navRef.current) {
                navRef.current && (navRef.current.style.backgroundColor='transparent')  
            }
    }

    const getUserInfo = useCallback(async () => {
        try {
            const data = await userApi.info()
            console.log(data)
            setUsername(data.response.username)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleLogout = () => {
        setIsAuth(false)
        localStorage.setItem('isAuth', JSON.stringify(false))
        localStorage.removeItem('mernflixToken')
    }
    

    

    useEffect(() => {
        getUserInfo()   
        if (isAuth && username===null) {
            console.log('fetch user info')
        }
        window.addEventListener('scroll', scrollFn) 

    }, [isAuth])

    let activeStyle = {
        borderBottom: '2px solid red',
        padding:'5px'
  };  
  return (
      <Flex  pos={'absolute'} zIndex={10} display={{base:'none',md:'block'}} fontFamily='bebas'>
           <Flex ref={navRef} style={{background: 'linear-gradient(0deg, rgba(1,1,1,0) 0%, rgba(1,1,1,1) 100%)'}} pos='fixed' top={0} w='100vw' alignItems={'center'} p='.6rem 2rem' color={'#E5E5E5'} >
          <Box>
              <Image h='40px' src='https://fontmeme.com/permalink/230305/45fcbc47916afa4eed29a10ff819946b.png' alt='Logo' />
          </Box>
          <Flex flexGrow='3' gap='1.5rem' pl='2rem'>
              {
                  navOptions.map((item) => {
                      return <NavLink style={({isActive})=>isActive?activeStyle:{padding:'5px'}} key={item.id} to={ item.link} ><Text fontSize={'sm'}>{ item.name}</Text></NavLink>
                })
              }
          </Flex>
          <Flex  flexGrow={'2'} justifyContent={'flex-end'} alignItems='center' gap='2rem' pr='2rem' >
              <Text fontSize={'sm'}><NavLink style={({isActive})=>isActive?activeStyle:{padding:'5px'}} to='/search'>Search</NavLink></Text>
                  {
                      isAuth ?<Menu >
                                <MenuButton p='5px 20px' borderRadius={'base'} border='1px solid red'>
                                    {username}
                                </MenuButton>
                                <MenuList style={{backgroundColor:'rgba(19, 19, 19,0.4)',textTransform:'capitalize'}} border='1px solid rgba(1,1,1,.5)'>
                                    <MenuItem style={{backgroundColor:'rgba(19, 19, 19,0.9)'}}>Favourites</MenuItem>
                                    <MenuItem style={{backgroundColor:'rgba(19, 19, 19,0.9)'}}>Reviews</MenuItem>
                                    <MenuItem style={{backgroundColor:'rgba(19, 19, 19,0.9)'}}>Password update</MenuItem>
                                    <MenuItem onClick={handleLogout} style={{backgroundColor:'rgba(19, 19, 19,0.9)'}} >Sign Out</MenuItem>
                                </MenuList>
                                </Menu>
                           : <Link to='/account/login'><Text fontSize={'sm'}>Login</Text></Link>
               }
          </Flex>
    </Flex>
     </Flex>
  )
}

export default Navbar