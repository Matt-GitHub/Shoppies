import React from 'react';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import NoMatch from './components/NoMatch';
import MovieList from './components/MovieList';
import './App.css';
import NominationsList from './components/NominationsList';
import useLocalStorage from './Hooks/UseLocalStorage';
function ShowMovies({ movies, nomination, setNomination }) {
  const query = useQuery(
    ['movie', movies],
    () => {
      return axios
        .get(`http://www.omdbapi.com/?s=${movies}&apikey=c154daad&type=movie`)
        .then(res => res.data);
    },
    {
      enabled: movies
    }
  );
  return query.isLoading ? null : query.isError ? (
    'Hey team, something went terribly wrong and my application cannot fetch the data, please contact me'
  ) : query?.data?.Search ? (
    <MovieList
      query={query}
      setNomination={setNomination}
      nomination={nomination}
    />
  ) : movies === '' ? (
    <NoMatch />
  ) : (
    'Please update your search to find the movie you are looking for'
  );
}
function App() {
  const [search, setSearch] = useLocalStorage('', 'query');
  const [nomination, setNomination] = useLocalStorage([], 'nominations');

  return (
    <>
      <h1>The Shoppies: Movie awards for entrepreneurs</h1>
      {console.log('search', search)}

      <label className="searchFunction">
        <div>Search</div>
        <input
          type="search"
          value={search}
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
        />
      </label>

      <div className="homeContainer">
        <div className="showMovies">
          <ShowMovies
            movies={search}
            setNomination={setNomination}
            nomination={nomination}
          />
        </div>
        <div className="nominationMovies">
          <NominationsList
            nomination={nomination}
            setNomination={setNomination}
          />
        </div>
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
