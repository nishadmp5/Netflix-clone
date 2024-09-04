import React from 'react'
import Header from '../components/header/Header'
import Movies from '../components/movies/Movies'
import {orginals,action,ComedyMovies,horror,romance,documentary,top_rated} from '../geners'

function HomeScreen() {
  return (
    <div className='home-screen'>
        
        <Header/>
        <Movies url = {orginals} title = "NETFLIX ORGINALS"/>
        <Movies url = {top_rated} title = "TOP RATED" isSmall />
        <Movies url = {action} title = "ACTIONS" isSmall />
        <Movies url = {ComedyMovies} title = "COMEDY" isSmall />
        <Movies url = {horror} title = "HORROR" isSmall />
        <Movies url = {romance} title = "ROMANCE" isSmall />
        <Movies url = {documentary} title = "DOCUMENTARY" isSmall />        
    </div>
  )
}

export default HomeScreen