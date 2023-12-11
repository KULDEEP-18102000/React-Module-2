import React,{useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import MovieForm from './components/MovieForm';
import './App.css';


function App() {

  const [movies,setMovies]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [apiCalling,setAPICalling]=useState(false)

  
  
  let intervalId;
  // if(apiCalling==true){
  //   intervalId = setInterval(async function() {
  //     console.log("api calling")
  //     const response=await fetch('https://react-http-92046-default-rtdb.firebaseio.com/movies.json')
  //     const json_response=await response.json()
  //     setMovies(json_response.results)
  // }, 5000);

  
    
  // }

  const addMovieHandler=async(movie)=>{
    console.log(movie)
      const response= await fetch('https://react-http-92046-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body:JSON.stringify(movie),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json()
    console.log(data)
    fetchMoviesHandler()
  }

  const deleteMovieHandler=async(id)=>{
    console.log('delete called')
    console.log(id)
    const response= await fetch(`https://react-http-92046-default-rtdb.firebaseio.com/movies/${id}.json`,{
      method:'DELETE',
      // body:JSON.stringify(id),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json()
    console.log(data)
    fetchMoviesHandler()
  }


  const fetchMoviesHandler=useCallback( async()=>{
    setLoading(true)
    try {
    
    const response=await fetch('https://react-http-92046-default-rtdb.firebaseio.com/movies.json')
    if(!response.ok){
      throw new Error('something went wrong ...Retrying')
    }
    
    const data=await response.json()
    console.log(data)

    const loadedMovies=[]
    console.log("comein")
    for(const key in data){
      console.log(key)
      loadedMovies.push({
        episode_id:key,
        title:data[key].Title,
        release_date:data[key].Date,
        opening_crawl:data[key].Text
      })
    }

    console.log(loadedMovies)

    setMovies(loadedMovies)
    setLoading(false)
    } catch (error) {
      // console.log(error)
      setError(error.message)
      setLoading(false)
      setAPICalling(true) 
    }
  },[])

  useEffect(()=>{
    fetchMoviesHandler()
  },[fetchMoviesHandler])

  const CancelFetching=()=>{
    console.log(intervalId)
    clearInterval(intervalId);
    setAPICalling(false)
    console.log('canceled')
  }


  return (
    <React.Fragment>
      <section>
        <MovieForm addMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={CancelFetching}>Cancel</button>
      </section>
      <section>
        {loading==false && !error && <MoviesList movies={movies} deleteMovie={deleteMovieHandler}/>}
        {loading==true && !error && <p>...Loading</p>}
        {loading==false && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
