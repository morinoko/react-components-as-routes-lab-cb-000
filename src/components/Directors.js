import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = directors.map((director, index) => {
    const movies = director.movies.map((movie, index) => <li key={index}>{movie}</li>);
    
    return (
      <div key={index}>
        <h2>Name: {director.name}</h2>
        <ul>
          {movies}
        </ul>
      </div> 
    )
  });
  
  return (
    <div>
    <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
