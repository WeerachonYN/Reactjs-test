import React from 'react'
import YouTube from 'react-youtube';
import { useState } from 'react';
export default function Youtube() {
   const [onReady,setOnready] =useState('')
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };
      document.title = 'YOUTUBE'
    return (
        <div>
            <h1>Youtube Premuim</h1>
            <YouTube videoId="tJvmOUlhz7g" opts={opts}  />;
        </div>
    )
}
