import React from 'react';

const MovieItem = ({ item, watchlist, setWatchlist }) => {
  const onSaveClick = () => {
    setWatchlist((watchlist) => [...watchlist, item]);

    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (storedWatchlist) {
      localStorage.setItem(
        'watchlist',
        JSON.stringify([...storedWatchlist, item])
      );
    } else {
      localStorage.setItem('watchlist', JSON.stringify([...[], item]));
    }
  };

  return (
    <div>
      <h5>{item.title}</h5>
      {/* <p>{item.release_date}</p>
      <p>{item.overview}</p> */}
      <button onClick={onSaveClick}>Save</button>
    </div>
  );
};

export default MovieItem;
