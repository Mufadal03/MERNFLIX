import React from 'react'
import YouTube from 'react-youtube';
const YoutubePlayer = ({ videoId }) => {
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const onReadyFn = (e) => {
        console.log(e)
    }
    const onErrorFn = (e) => {
        console.log('error',e)
    }
  return (
      <YouTube videoId="7ZtRnIwv_FY" opts={opts} onReady={onReadyFn} onError={onErrorFn} />
  )
}

export default YoutubePlayer