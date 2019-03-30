import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorList = actors.map((actor, index) => {
    const movies = actor.movies.map((movie, index) => <li key={index}>{movie}</li>);
    
    return (
      <div key={index}>
        <h2>Name: {actor.name}</h2>
        <ul>
          {movies}
        </ul>
      </div> 
    )
  });
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
