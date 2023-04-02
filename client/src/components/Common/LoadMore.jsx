import { Button } from '@chakra-ui/react'
import React from 'react'

const LoadMore = ({onClick}) => {
  return (
    <Button bgColor={'transparent'} onClick={()=>onClick()} w='100%' _hover={{backgroundColor:'transparent'}} border='1px sol' color='red'>LOAD MORE</Button>
  )
}

export default LoadMore