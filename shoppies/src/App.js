import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import NoMatch from './components/NoMatch';
import MovieList from './components/MovieList';
import './App.css';
import NominationsList from './components/NominationsList';
function ShowMovies({ movies, setNominations, nominations, list }) {
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
    />
  ) : (
    <NoMatch />
  );
}
function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  console.log('nominations on app', nominations);
  return (
    <>
      <h1>The Shoppies: Movie awards for entrepreneurs</h1>
      <NominationsList
        nominations={nominations}
        setNominations={setNominations}
      />
      <input value={movies} onChange={e => setMovies(e.target.value)} />
      <ShowMovies
        movies={movies}
        setNominations={setNominations}
        nominations={nominations}
      />

      <ReactQueryDevtools />
    </>
  );
}

export default App;
