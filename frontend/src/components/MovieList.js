import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <MovieItem item={item} />
      ))}
    </div>
  );
};

export default MovieList;
