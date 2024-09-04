
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase';
import './signIn.css';
import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen';
import { useNavigate } from 'react-router-dom';





function SignIn() {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [signupUser,setSignupUser]=useState(false)
  const [loginUser,setLoginUser]=useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    const data = localStorage.getItem('user');
    if(data){
      setSignupUser(JSON.parse(data))
      setLoginUser(JSON.parse(data))
    }
  },[])
  
  

  const signUp = () =>{
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredenetial)=>{
        const userData = userCredenetial.user;
        setSignupUser(userData);
        localStorage.setItem('user',true);
        console.log(userData);
      }).catch((error)=>{
        alert(error.message)
      })
      setEmail('');
      setPassword('');
  }  

  const signIn=()=>{
    signInWithEmailAndPassword(auth,email,password).then((userCredenetial)=>{
      const userData = userCredenetial.user;
      setLoginUser(userData);
      console.log(userData);
      localStorage.setItem('user',true);
    }).catch((error)=>{
      alert(error.message)
    })
    setEmail('');
    setPassword('');
  }




  return (
   
       <div className='signin_screen'>
      { signupUser || loginUser ?  (
        
        navigate('/homescreen',{replace:true})
          
        
      ) : (
        
        <>
          <div className='fade'>
          <div className="signup_header">
            <img className='signup_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        </div>
        <div className="signin_section">

            <h1>Sign In</h1>
            <input type="email" className="email_inp" placeholder='Email Address' value={email} required onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className="password_inp" placeholder='password' value={password} required onChange={(e)=>setPassword(e.target.value)} />
            <button className="signIn_btn" onClick={signIn} >Sign in</button>
            <div className='new_to_netflix'><p >New To Netflix? <span onClick={signUp}>Sign up now.</span></p></div>
            <div className="ensurence"><p>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot.</p></div>

        </div>
        </div>
        </>
      )}
        
    </div>
    
   
  )
}

export default SignIn