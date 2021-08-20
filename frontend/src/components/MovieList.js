import React, { useState } from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ items, watchlist, setWatchlist, alreadyInWatchlist }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 pt-2">
      {items
        .filter((item) => item.poster_path)
        .map((item) => (
          <MovieItem
            key={item.id}
            item={item}
            setWatchlist={setWatchlist}
            watchlist={watchlist}
            alreadyInWatchlist={alreadyInWatchlist}
          />
        ))}
    </div>
  );
};

export default MovieList;
