import React from 'react';

const MovieItem = ({ item }) => {
  return (
    <div>
      <h4>{item.title}</h4>
      <p>{item.release_date}</p>
      <p>{item.overview}</p>
    </div>
  );
};

export default MovieItem;
