import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {

  const deleteMovie=(id)=>{
    console.log(id)
    props.deleteMovie(id)
    }

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <>
        <Movie
          key={movie.episode_id}
          title={movie.title}
          releaseDate={movie.release_date}
          openingText={movie.opening_crawl}
        />
        <button onClick={()=>{deleteMovie(movie.episode_id)}}>Delete</button>
        </>
      ))}
    </ul>
  );
};

export default MovieList;
