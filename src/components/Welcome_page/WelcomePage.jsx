import React, { useEffect, useState } from 'react'
import './welcome.css'
import SignIn from '../signIn/SignIn'
import HomeScreen from '../../screens/HomeScreen';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

    const [sign , setSign] = useState(false);
    const [keepLog,setKeepLog]=useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const data = localStorage.getItem('user');
        if(data){
            setKeepLog(JSON.parse(data))
        }
    },[])
  return (

    <div className='welcome-page'>
    {
        keepLog ? (
            <HomeScreen/>
        ):(
            <>
                {sign ? (
            <SignIn/>
        ):(
            <>
        <div className="fade">
        <div className="logo">
            <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <button onClick={()=>{
                navigate('/signup');
            }} className="sign-in">Sign In</button>
        </div>
        <div className="intro">
            <h1 className='intro-text'>Unlimited movies, TV<br></br>&nbsp;&nbsp;&nbsp;&nbsp;shows and more.</h1>
            <h2 className='intro-text'>Watch Anywhere. Cancel Anytime.</h2>
            <h3 className='intro-text'>Ready to watch? Enter your email to create or <span >restart your membership.</span> </h3>
            
        </div>
        <div className="inp"> 
            <input className='intro-input' type="email" placeholder='Email address' /><span><button className='get-started' onClick={()=>{
                navigate('/signup');
            }}>Get Started</button></span>
        </div>
        
        </div>

    <div className="section-one">
        <h1>Enjoy on your TV.</h1>
        <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players  <span>and more.</span></h2>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
    </div>

    <div className="section-two">
        <h1>Download your shows to <span> watch offline.</span></h1>
        <h2>Save your favourites easily and always <span>have something to watch.</span></h2>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
    </div>

    <div className="section-three">
        <h1>Watch everywhere.</h1>
        <h2>Stream unlimited movies and TV shows  <span>on your phone, tablet, laptop, and TV.</span> </h2>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
    </div>

    <div className="section-four">
        <h1>Create profiles for children.</h1>
        <h2>Send children on adventures with their <span> favourite characters in a space made</span> <span>for them free with your membership.</span> </h2>
        <img src="https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="" />
    </div>
            </>
        )}
            </>
        )
    }
        

    </div>
  )
}

export default WelcomePage;