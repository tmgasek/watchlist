import React from 'react';
import WatchlistItem from './WatchlistItem';

const Watchlist = ({ watchlist, setWatchlist }) => {
  return (
    <div>
      <h2>watchlist</h2>
      {watchlist.map((item) => (
        <WatchlistItem
          key={item.id}
          item={item}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />
      ))}
    </div>
  );
};

export default Watchlist;
