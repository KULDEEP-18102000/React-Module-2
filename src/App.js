import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';


function App() {

  const [movies,setMovies]=useState([])
  const [loading,setLoading]=useState(false)

  const fetchMoviesHandler=async()=>{
    setLoading(true)
    const response=await fetch('https://swapi.dev/api/films/')
    const json_response=await response.json()
    setMovies(json_response.results)
    setLoading(false)
  }

  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading==false && <MoviesList movies={movies} />}
        {loading==true && <p>...Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
