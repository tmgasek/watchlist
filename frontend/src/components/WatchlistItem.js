import React from 'react';

const WatchlistItem = ({ item, watchlist, setWatchlist }) => {
  const label = item.watched ? 'unwatch' : 'watched';

  const toggleWatched = (id) => {
    const movie = watchlist.find((m) => m.id === id);

    const changedMovie = { ...movie, watched: !movie.watched };
    const newList = watchlist.map((m) => (m.id !== id ? m : changedMovie));
    setWatchlist(newList);
    localStorage.setItem('watchlist', JSON.stringify(newList));
  };

  return (
    <div>
      <h2 className="text-lg">{item.title}</h2>
      <button
        className="btn border-blue-200 border-2 m-2 hover:text-black hover:border-blue-500 bg-white"
        onClick={() => toggleWatched(item.id)}
      >
        {label}
      </button>
    </div>
  );
};

export default WatchlistItem;
