import React, { useState } from 'react';

const SearchBar = ({ setMovieTerm }) => {
  const [termInput, setTermInput] = useState('');

  const onInputChange = (e) => {
    setTermInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setMovieTerm(termInput);
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={termInput} onChange={onInputChange}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
