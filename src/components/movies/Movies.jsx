import React from 'react'
import {useEffect,useState} from 'react'
import './movies.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants'
import YouTube from 'react-youtube'
function Movies(props) {
    const [poster,setPoster] = useState([]);
    const [key,setKey]=useState();

    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            
            setPoster(response.data.results)
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    };

    const trailer =(id)=>{
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results);
            if(response.data.results.length!=0){
                setKey(response.data.results[0]);
            }
        })
    }

  return (
    <div className='movies-container'>
        <h3 className={props.isSmall ? 'action-title' : 'type'}>{ props.title}</h3> 
        <div className="cards">
        
            {
                poster.map((obj,index)=>{
                    return (
                        <div key={index}>
                            <img onClick={()=>trailer(obj.id)} className={props.isSmall ? 'small-card' : 'movie'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                            {/* <p className={props.isSmall ? 'action-name' :'movie-names'}>{props.isSmall ? obj.title : obj.name}</p> */}
                        </div>
                        
                        
                    )
                   
                })
            }
             
        </div>
        {key && <YouTube opts={opts}videoId={key.key}  /> }
    </div>
  )
}

export default Movies