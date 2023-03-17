import {Flex } from '@chakra-ui/react'
import React from 'react'
import mediaApi from '../api/modules/media.api'
import GenreRow from './GenreRow'

const Genre = () => {
  return (
    <Flex direction={'column'} h='-webkit-fit-content' gap='1rem' pl={{base:'.5rem',md:'1rem',lg:'2rem'}} >
          <GenreRow title={'trending movies'} api={mediaApi.getTrendingList({ mediaType: 'movie', timeWindow: 'day', page: 1 })} to='/media/movie?category=trending'/>
          <GenreRow title={'trending Tv shows'} api={mediaApi.getTrendingList({mediaType:'tv',timeWindow:'day'}) } to='/media/tv?category=trending' />
          <GenreRow title={'popular movies' } api={mediaApi.getList({mediaType:'movie',mediaCategory:'popular',page:1})} to='/media/movie?category=popular' />
          <GenreRow title={'popular tv shows'} api={ mediaApi.getList({mediaType:'tv',mediaCategory:'popular',page:1})} to='/media/tv?category=popular'/>
          <GenreRow title={'Science Fiction movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '878', page: 1 })} to='/media/movie?category=Science Fiction' />
          <GenreRow title={'Crime Shows'} api={mediaApi.getMediaByGenre({ mediaType: 'tv', genreId: '80',page:1 })} to='/media/tv?category=Crime' />
          <GenreRow title={'Action packed Shows'} api={mediaApi.getMediaByGenre({ mediaType: 'tv', genreId: '10759',page:1 })} to='/media/tv?category=Action & Adventure' />
          <GenreRow title={'thriller movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '53' ,page:1})} to='/media/movie?category=Thriller'/> 
          <GenreRow title={'Family Shows'} api={mediaApi.getMediaByGenre({ mediaType: 'tv', genreId: '10751', page: 1 })} to='/media/tv?category=Family' />
          <GenreRow title={'Animation movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '16', page: 1 })} to='/media/movie?category=Animation' /> 
          <GenreRow title={'Animation Series' } api={mediaApi.getMediaByGenre({mediaType:'tv',genreId:'16',page:1})} to='/media/tv?category=Animation'/>
          <GenreRow title={'Documentary' } api={mediaApi.getMediaByGenre({mediaType:'tv',genreId:'99',page:1})} to='/media/tv?category=Documentary'/>
          
    </Flex>
  )
}

export default Genre