import React from 'react';

const MovieItem = ({ item, watchlist, setWatchlist }) => {
  const onSaveClick = () => {
    console.log(item);
    setWatchlist((watchlist) => [...watchlist, item]);
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
