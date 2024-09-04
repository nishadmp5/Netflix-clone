import {API_KEY} from './constants'

export const orginals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const ComedyMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentary = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
export const top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const latest = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`
export const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`