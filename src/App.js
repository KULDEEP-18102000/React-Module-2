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
  if(apiCalling==true){
    intervalId = setInterval(async function() {
      console.log("api calling")
      const response=await fetch('https://swapi.dev/api/film/')
      const json_response=await response.json()
      setMovies(json_response.results)
  }, 5000);

  
    
  }

  


  const fetchMoviesHandler=useCallback( async()=>{
    setLoading(true)
    try {
    
    const response=await fetch('https://swapi.dev/api/films/')
    if(!response.ok){
      throw new Error('something went wrong ...Retrying')
    }
    
    const json_response=await response.json()
    setMovies(json_response.results)
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
        <MovieForm/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={CancelFetching}>Cancel</button>
      </section>
      <section>
        {loading==false && !error && <MoviesList movies={movies} />}
        {loading==true && !error && <p>...Loading</p>}
        {loading==false && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
