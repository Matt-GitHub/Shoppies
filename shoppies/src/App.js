import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import NoMatch from './components/NoMatch';
import MovieList from './components/MovieList';
import './App.css';
import NominationsList from './components/NominationsList';
import useLocalStorage from './Hooks/UseLocalStorage';
function ShowMovies({ movies, setNominations, nominations, test, setTest }) {
  const query = useQuery(movies, () => {
    return axios
      .get(`http://www.omdbapi.com/?s=${movies}&apikey=c154daad&type=movie`)
      .then(res => res.data);
  });
  return query.isLoading ? (
    '...loading'
  ) : query.isError ? (
    'error fetching data'
  ) : query?.data?.Search ? (
    <MovieList
      setNominations={setNominations}
      nominations={nominations}
      query={query}
      setTest={setTest}
      test={test}
    />
  ) : (
    <NoMatch />
  );
}
function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [search, setSearch] = useLocalStorage('', 'query');
  const [test, setTest] = useLocalStorage([], 'test');
  console.log('app set test', setTest);
  return (
    <>
      <h1>The Shoppies: Movie awards for entrepreneurs</h1>
      <input
        value={search}
        placeholder="search"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="homeContainer">
        <div className="showMovies">
          <ShowMovies
            movies={search}
            setNominations={setNominations}
            nominations={nominations}
            setTest={setTest}
            test={test}
          />
        </div>
        <div className="nominationMovies">
          <NominationsList
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
