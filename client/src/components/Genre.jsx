import {Flex } from '@chakra-ui/react'
import React from 'react'
import mediaApi from '../api/modules/media.api'
import GenreRow from './GenreRow'

const Genre = () => {
  return (
      <Flex direction={'column'} gap='1rem' pl='2rem' bgColor={'black'} color='white'>
          <GenreRow title={'trending movies'} api={mediaApi.getTrendingList({ mediaType: 'movie', timeWindow: 'day', page: 1 })} to='/media/movie?category=trending'/>
          <GenreRow title={'trending Tv shows'} api={mediaApi.getTrendingList({mediaType:'tv',timeWindow:'day'}) } to='/media/tv?category=trending' />
          <GenreRow title={'popular movies' } api={mediaApi.getList({mediaType:'movie',mediaCategory:'popular',page:1})} to='/media/movie?category=popular' />
          <GenreRow title={'popular tv shows'} api={ mediaApi.getList({mediaType:'tv',mediaCategory:'popular',page:1})} to='/media/tv?category=popular'/>
          <GenreRow title={'Science Fiction movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '878' })} to='/media/movie?category=Science Fiction' />
          <GenreRow title={'thriller movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '53' })} to='/media/movie?category=Thriller'/> 
          <GenreRow title={'Animation movies' } api={mediaApi.getMediaByGenre({mediaType:'movie',genreId:'16'})} to='/media/movie?category=Animation'/> 
          <GenreRow title={'Documentary' } api={mediaApi.getMediaByGenre({mediaType:'tv',genreId:'99'})} to='/media/tv?category=Documentary'/>
          
    </Flex>
  )
}

export default Genre