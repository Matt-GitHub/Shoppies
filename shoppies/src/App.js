import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import NoMatch from './components/NoMatch';
import './App.css';
function ShowMovies({ movies }) {
  const query = useQuery(movies, () => {
    return axios
      .get(`http://www.omdbapi.com/?s=${movies}&apikey=c154daad&type=movie`)
      .then(res => res.data);
  });
  console.log(query?.data?.Search);
  return query.isLoading ? (
    '...loading'
  ) : query.isError ? (
    'error fetching data'
  ) : query?.data?.Search ? (
    query?.data?.Search.map((data, key) => {
      return (
        <div key={key}>
          <h2>{data.Title}</h2>
          <img height="200px" src={data.Poster} alt={data.Title} />
          <p>Release Date: {data.Year}</p>
          <button type="button">Nominate</button>
        </div>
      );
    })
  ) : (
    <NoMatch />
  );
}
function App() {
  const [movies, setMovies] = useState('');
  return (
    <>
      <h1>Movie Finder</h1>
      <input value={movies} onChange={e => setMovies(e.target.value)} />
      <ShowMovies movies={movies} />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
