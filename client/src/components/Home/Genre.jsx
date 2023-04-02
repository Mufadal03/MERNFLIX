import {Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { favouriteApi } from '../../api/modules/favourite.api'
import mediaApi from '../../api/modules/media.api'
import GenreRow from './GenreRow'

const Genre = () => {
  const isAuth = useSelector(state=>state.isAuth)
  return (
    <Flex direction={'column'} h='-webkit-fit-content' gap='1rem' pl={{ base: '.5rem', md: '1rem', lg: '2rem' }} >
      {
        isAuth && <GenreRow title='My Favourites' api={favouriteApi.getFav()} to='/favourites' />
      }
          <GenreRow title={'trending movies'} api={mediaApi.getTrendingList({ mediaType: 'movie', timeWindow: 'day', page: 1 })} to='/media/movie?genre=trending'/>
          <GenreRow title={'trending Tv shows'} api={mediaApi.getTrendingList({mediaType:'tv',timeWindow:'day'}) } to='/media/tv?genre=trending' />
          <GenreRow title={'popular movies' } api={mediaApi.getList({mediaType:'movie',mediaCategory:'popular',page:1})} to='/media/movie?genre=popular' />
          <GenreRow title={'popular tv shows'} api={ mediaApi.getList({mediaType:'tv',mediaCategory:'popular',page:1})} to='/media/tv?genre=popular'/>
          <GenreRow title={'Science Fiction movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '878', page: 1 })} to='/media/movie?genre=878' />
          <GenreRow title={'Crime Shows'} api={mediaApi.getMediaByGenre({ mediaType: 'tv', genreId: '80',page:1 })} to='/media/tv?genre=80' />
          <GenreRow title={'Action packed Shows'} api={mediaApi.getMediaByGenre({ mediaType: 'tv', genreId: '10759',page:1 })} to='/media/tv?genre=10759' />
          <GenreRow title={'thriller movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '53' ,page:1})} to='/media/movie?genre=53'/> 
          <GenreRow title={'Family Shows'} api={mediaApi.getMediaByGenre({ mediaType: 'tv', genreId: '10751', page: 1 })} to='/media/tv?genre=10751' />
          <GenreRow title={'Animation movies'} api={mediaApi.getMediaByGenre({ mediaType: 'movie', genreId: '16', page: 1 })} to='/media/movie?genre=16' /> 
          <GenreRow title={'Animation Series' } api={mediaApi.getMediaByGenre({mediaType:'tv',genreId:'16',page:1})} to='/media/tv?genre=16'/>
          <GenreRow title={'Documentary' } api={mediaApi.getMediaByGenre({mediaType:'tv',genreId:'99',page:1})} to='/media/tv?genre=99'/>
          
    </Flex>
  )
}

export default Genre