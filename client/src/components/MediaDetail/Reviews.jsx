import { Avatar, Box, Button, Flex, Heading, Text ,Icon, Textarea} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import LoadMore from '../Common/LoadMore'
import {BiSend} from 'react-icons/bi'
import { useSelector } from 'react-redux'

const Reviews = ({mediaName,allReviews}) => {
    const { isAuth, username } = useSelector(state => {
        return {
            isAuth: state.isAuth,
            username:state.username
        }
    })
    const [userReview,setUserReview] = useState('')
    const [reviewsDb,setReviewDb] = useState(allReviews)
    const [reviews, setReviews] = useState([])
    const [page,setPage] = useState(1)
    const skip = 3
    useEffect(() => {
        const filtered = reviewsDb.slice(0, skip)  
        setReviews(filtered)
    }, [])
    const loadMore = () => {
        console.log('load more comments')
        setReviews([...reviews, ...[...reviewsDb].splice(page * skip, skip)])
        setPage(p=>p+1)
    }
    const handlePost = () => {
        if (userReview === '') return
        console.log(userReview)
    }
  return (
      <Box w='90vw' m='auto'>
          <Heading fontWeight={'md'} fontSize='3xl' fontFamily={'bebas'} py='1rem'>Reviews</Heading>
          <Flex direction={'column'} gap='.5rem'>
              {
                  reviews.map((el) => <Comment key={el.id} data={ el} />)
              } 
              {
                  reviews.length<reviewsDb.length && <LoadMore onClick={loadMore}/>
              }
          </Flex>  
          <Text border={'.5px solid gray'} my='1rem'></Text>
          <Flex direction='column' display={isAuth?'flex':'none'} gap='1rem'>
              <Flex alignItems={'center'} gap='.5rem'>
                  <Avatar name={username}/>
                  <Text>{username}</Text>
              </Flex>
              <Textarea value={userReview} onChange={(e)=>setUserReview(e.target.value)} size={'sm'} placeholder={`write a review for ${mediaName}`} />
                  

              <Button onClick={handlePost} rightIcon={<Icon as={BiSend} h={5} w={6} />} border='1px solid rgba(255, 0, 0, 0.5)' _hover={{backgroundColor:'transparent'}} bgColor='transparent' borderRadius={'none'} w='fit-content' fontWeight={'thin'} color='red'>POST</Button>
          </Flex>   
    </Box>
  )
}

export default Reviews