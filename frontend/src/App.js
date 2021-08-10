import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import movieDb from './apis/themoviedb';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Watchlist from './components/Watchlist';

const App = () => {
  const [movieTerm, setMovieTerm] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    console.log(storedWatchlist);
    if (storedWatchlist) {
      setWatchlist(storedWatchlist);
    }
  }, []);

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

  const padding = {
    paddingRight: 5,
  };

  return (
    <div>
      <div>
        <Link style={padding} to="/">
          search
        </Link>
        <Link style={padding} to="/watchlist">
          watchlist
        </Link>
      </div>
      <Switch>
        <Route path="/watchlist">
          <Watchlist watchlist={watchlist} />
        </Route>
        <Route path="/">
          <SearchBar setMovieTerm={setMovieTerm} />
          <MovieList
            items={results}
            setWatchlist={setWatchlist}
            watchlist={watchlist}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
