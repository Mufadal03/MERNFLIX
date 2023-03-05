import React, { useEffect, useState } from 'react'
import axios from '../axios/customAxios'
const useFetch = ({ url, max }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const { data } = axios.get(url)
    },[url])
  return (
    <div>useFetch</div>
  )
}

export default useFetch