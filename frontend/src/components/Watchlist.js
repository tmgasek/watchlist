import React from 'react';
import WatchlistItem from './WatchlistItem';

const Watchlist = ({ watchlist }) => {
  console.log(watchlist);
  return (
    <div>
      <h2>watchlist</h2>
      {watchlist.map((item) => (
        <WatchlistItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Watchlist;
