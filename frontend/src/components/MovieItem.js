import React from 'react';

const MovieItem = ({ item, watchlist, setWatchlist }) => {
  const onSaveClick = () => {
    setWatchlist(watchlist.concat(item));

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
    <div className="bg-white rounded shadow-md overflow-hidden relative flex flex-col ">
      <img
        className=""
        alt=""
        src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
      />
      <h5 className="text-l">{item.title}</h5>
      <div className="absolute">
        <button
          className="btn border-blue-200 border-2 m-2 hover:text-black hover:border-blue-500 bg-white"
          onClick={onSaveClick}
        >
          save
        </button>
      </div>
      <div className="pt-0 self-center">
        {/* <button onClick={onSaveClick}>save</button> */}
      </div>
    </div>
  );
};

export default MovieItem;
