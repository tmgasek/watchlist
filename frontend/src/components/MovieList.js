import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ items, watchlist, setWatchlist }) => {
  return (
    <div>
      {items.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          setWatchlist={setWatchlist}
          watchlist={watchlist}
        />
      ))}
    </div>
  );
};

export default MovieList;
