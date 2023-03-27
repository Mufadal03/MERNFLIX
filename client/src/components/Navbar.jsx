import React, {  useEffect, useRef } from 'react'
import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userInfo } from '../redux/actions'

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
        link:'/favourites'
    }
]
const Navbar = () => {
    const navRef = useRef()
    const dispatch = useDispatch()
    const { isAuth ,token,username} = useSelector(state => {
        return {
            isAuth: state.isAuth,
            token: state.token,
            username:state.username
        }
    })
    const scrollFn = () => {
            if (window.pageYOffset > 15 && navRef.current) {
                navRef.current && (navRef.current.style.backgroundColor = 'black')
            }
            if (window.pageYOffset < 15 && navRef.current) {
                navRef.current && (navRef.current.style.backgroundColor='transparent')  
            }
    }

   
    

    useEffect(() => {
        window.addEventListener('scroll', scrollFn) 
    }, [])
    
    useEffect(() => {
        if (isAuth) {
            dispatch(userInfo())
        }
    }, [isAuth])
    
    const handleLogout = ()=>{
        dispatch(logout())
    }

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
                                    <Text fontSize={'sm'}>{username}</Text>
                                </MenuButton>
                                <MenuList style={{backgroundColor:'rgba(19, 19, 19,0.4)',textTransform:'capitalize'}} border='1px solid rgba(1,1,1,.5)'>
                                    <MenuItem style={{backgroundColor:'rgba(19, 19, 19,0.9)'}}> <Link to='/favourites'><Text >Favourites</Text></Link></MenuItem>
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