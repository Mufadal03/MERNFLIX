import { Box, Button, Flex, HStack, Image, Input, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userApi } from '../api/modules/user.api'
import bg from '../utils/bg.jpg'
const Signup = () => {
  const navigate= useNavigate()
  const toast = useToast()
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    username:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target 
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  }

  const handleSignUp = async() => {
    const { username, email, password } = userDetails
    if(username==='' || email==='' || password==='')return
    try {
      const data = await userApi.signup(userDetails)
      toast({
        title: data.response,
        position: 'top',
        status: data.success ? 'success' : 'error',
        duration: 3000,
        isClosable:true
      })
      if(data.success)navigate('/account/login')
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
             <Input onChange={handleChange} name='username' color={'#8c8c8c'} bgColor='#333' border={'none'} outline='none' size={'lg'} type={'text'} placeholder={'Enter username'} />
            <Input onChange={handleChange} name='email' color={'#8c8c8c'} bgColor='#333' border={'none'} outline='none' size={'lg'} type={'email'} placeholder={'Enter email'} />
            <Input onChange={handleChange} name='password' color={'#8c8c8c'} bgColor='#333' border={'none'} outline='none' size={'lg'} type={'password'} placeholder={'Enter password'} />
            <Button onClick={handleSignUp} colorScheme={'red'} size='lg' w='100%' borderRadius={'sm'}>SignUp</Button>
          </VStack>
          <HStack >
            <Text fontSize={'lg'} textAlign={'left'} color='#737373'>already have an account?</Text>
            <Text color='white'><Link to='/account/login'>Login</Link></Text>
          </HStack>
        </Flex>

      </Flex>
    </Box>
  )
}

export default Signup