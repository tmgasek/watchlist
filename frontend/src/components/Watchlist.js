import React from 'react';

const Watchlist = ({ watchlist }) => {
  console.log(watchlist);
  return (
    <div>
      <h2>watchlist</h2>
      {watchlist.map((m) => (
        <div>{m.title}</div>
      ))}
    </div>
  );
};

export default Watchlist;
