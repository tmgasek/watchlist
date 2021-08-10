import React, { useEffect, useState } from 'react';
import movieDb from './apis/themoviedb';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [movieTerm, setMovieTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const result = await movieDb.get('search/movie', {
        params: {
          query: movieTerm,
          page: 1, //TODO: add next page functionality
        },
      });
      console.log('result:', result);
      setResults(result.data.results);
    };

    if (movieTerm) {
      search();
    }
  }, [movieTerm]);

  return (
    <div>
      <SearchBar setMovieTerm={setMovieTerm} />
      <MovieList items={results} />
      <h2>hello</h2>
    </div>
  );
};

export default App;
