import React from 'react'
import {useEffect,useState} from 'react'
import './header.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants'
import SignIn from '../signIn/SignIn'
import LoginScreen from '../../screens/LoginScreen'
import {useNavigate} from 'react-router-dom'
function Header() {


  const [movie,setMovie] = useState([])
  const [nav,setNav] =useState(false);
  const [logout,setLogout]=useState(false);
  const history = useNavigate();

  const navBarTransition = ()=>{
    if(window.scrollY > 100){
      setNav (true)
    }else {
      setNav(false)
    }
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{  
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])

      
    })
  },[])
  
  useEffect(()=>{
    window.addEventListener('scroll',navBarTransition)
    return ()=>window.removeEventListener('scroll',navBarTransition);
  },[])


  return (
    <div className='main_div'>
         <div style={{backgroundImage : `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
         className='container'>

         <div className={nav ? 'logos' : 'logos-no-bg'}>
          <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
          {/* <img className='avatar' onClick={()=>{
            localStorage.removeItem('user')
            setLogout(true);
            history('/',{replace:true});
          }} src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" /> */}
          <button className='avatar' onClick={()=>{
             localStorage.removeItem('user')
             setLogout(true);
             history('/',{replace:true});
          }}>Logout</button>
          </div>
          <div className="banner" >
            <div className="movie-name">
              <h1 className='title'>{movie ? movie.title : ""}</h1>
              <div className="buttons">
                <button className="play">Play</button>
                <button className="mylist">My list</button>
              </div>
              <p className='description'>{movie ? movie.overview : ""}</p>
            </div>
            <div className="shade">
            </div>
          </div>
          
        </div>
  
    </div>

  )
}

export default Header