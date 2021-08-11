import React from 'react';

const WatchlistItem = ({ item }) => {
  const onWatchedClick = (e) => {
    item.watched = true;
    console.log(item);
    console.log(e.target.textContent);
  };

  return (
    <div>
      <h2 className="text-lg">{item.title}</h2>
      <button
        className="btn border-blue-200 border-2 m-2 hover:text-black hover:border-blue-500 bg-white"
        onClick={(e) => onWatchedClick(e)}
      >
        watched
      </button>
    </div>
  );
};

export default WatchlistItem;
