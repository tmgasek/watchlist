import React from 'react';

const Watchlist = ({ watchlist }) => {
  console.log(watchlist);
  return (
    <div>
      <h2>watchlist</h2>
      {watchlist.map((m) => (
        <div key={m.id}>{m.title}</div>
      ))}
    </div>
  );
};

export default Watchlist;
