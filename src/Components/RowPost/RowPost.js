import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
function RowPost(props) {
    const [movie,setMovie] = useState([])
    const [urlId,setUrlId]=  useState()
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
      const handleClick=(id)=>{
           axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
             if(response.data.results.length !==0){
                setUrlId(response.data.results[0])
             }else{
                setUrlId('')
             }
           }).catch((e)=>{
                setUrlId('')
           })
      }


    return (
        
          
            <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {movie.map((obj)=>
                <img onClick={()=>handleClick(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster'src={`${imageUrl}${obj.backdrop_path}}`} />
            )}
                </div>
               { urlId? <YouTube videoId={`${urlId.key}`} opts={opts} /> : null}
        </div>
            )
       
        
    
}

export default RowPost