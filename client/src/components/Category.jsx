import { Select } from '@chakra-ui/react'
import React from 'react'
import { movieGenres,tvGenres } from '../utils/genreDb'


const Category = ({ mediaType,value, setCategory }) => {
    
  return (
      <Select border={'1px'} value={value} size='sm'  w='fit-content' onChange={(e) => setCategory(e.target.value)} fontFamily='bebas' fontWeight={'md'}>
          <option style={{ backgroundColor: 'rgba(19, 19, 19,0.9)' }} value={'trending'} >Trending</option>
          <option style={{backgroundColor:'rgba(19, 19, 19,0.9)'}} value={'popular'} >Popular</option>
          <option style={{backgroundColor:'rgba(19, 19, 19,0.9)'}} value={'top_rated'} >Top rated</option>
          
          {
              mediaType === 'tv' ? tvGenres.map((el, i) => <option style={{backgroundColor:'rgba(19, 19, 19,0.9)'}} key={el.id} value={el.id}>{el.name}</option>):movieGenres.map((el, i) => <option style={{backgroundColor:'rgba(19, 19, 19,0.9)'}} key={el.id} value={el.id}>{el.name}</option>)
                  
          }
      </Select>
  )
}

export default Category