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
    // const config = async () => {
    //   const result = await movieDb.get('configuration');
    //   console.log(result);
    // };

    // config();
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
    <div className="text-gray-600 font-body p-2 bg-gray-100 min-h-screen">
      <div className="text-2xl flex justify-center">
        <Link className="p-4" to="/">
          search
        </Link>
        <Link className="p-4" to="/watchlist">
          watchlist
        </Link>
      </div>
      <Switch>
        <Route path="/watchlist">
          <Watchlist watchlist={watchlist} />
        </Route>
        <Route path="/">
          <div>
            <div className="flex justify-center">
              <SearchBar setMovieTerm={setMovieTerm} />
            </div>

            <MovieList
              items={results}
              setWatchlist={setWatchlist}
              watchlist={watchlist}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
