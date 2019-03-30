import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map((movie, index) => {
    const genres = movie.genres.map((genre, index) => <li key={index}>{genre}</li>);
    
    return (
      <div key={index}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>
          {genres}
        </ul>
      </div> 
    )
  });
  
  return (
    <div>
    <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
