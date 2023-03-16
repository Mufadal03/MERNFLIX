import { Box, Button, Flex, HStack, Image, Input, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import mediaApi from '../api/modules/media.api'
import { userApi } from '../api/modules/user.api'
import publicAxios from '../axios/publicAxios'
import bg from '../utils/bg.jpg'
const Login = () => {
  const toast = useToast()
  const navigate=useNavigate()
  const [userDetails, setuserDetails] = useState({
    email: '',
    password:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target 
    setuserDetails({
      ...userDetails,
      [name]:value
    })
  }

  const handleSubmit = async() => {
    const { email, password } = userDetails
    if (email === '', password == '') return
    try {
      const data = await userApi.login(userDetails)
      console.log(data)
      toast({
        title: data.response,
        position: 'top',
        status: data.success ? "success" : "error",
        duration: 3000,
        isClosable:true
      })
      
      if (data.success) {
        localStorage.setItem('isAuth',JSON.stringify(true))
        localStorage.setItem('mernflixToken', JSON.stringify(data.token))
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box minH='100vh' bgImage={`url(${bg})`} >
      <Flex h={'100vh'} justifyContent='center' alignItems={'center'}>
        <Flex w='500px' h={''} alignItems='center'  bgColor={'rgba(1,1,1,0.9)'} direction='column' p='2rem' gap='2rem' borderRadius={'lg'}>
          <Image src='https://fontmeme.com/permalink/230305/45fcbc47916afa4eed29a10ff819946b.png' alt='Logo' />
          <VStack w='100%' gap='1rem' >
            <Input name={'email'} onChange={handleChange} color={'#8c8c8c'} bgColor='#333' border={'none'} outline='none' size={'lg'} type={'email'} placeholder={'Enter registered email'} />
            <Input name={'password'} onChange={handleChange} color={'#8c8c8c'} bgColor='#333' border={'none'} outline='none' size={'lg'} type={'password'} placeholder={'Enter password'} />
            <Button onClick={handleSubmit} colorScheme={'red'} size='lg' w='100%' borderRadius={'sm'}>Login</Button>
          </VStack>
          <HStack >
            <Text fontSize={'lg'} textAlign={'left'} color='#737373'>New to MERNFLIX?</Text>
            <Text color='white'><Link to='/account/signup'>SignUp</Link></Text>
          </HStack>
        </Flex>

      </Flex>
    </Box>
  )
}

export default Login