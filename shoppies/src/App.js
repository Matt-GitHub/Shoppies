import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import './App.css';
function ShowMovies({ movies }) {
  const query = useQuery(movies, () => {
    return axios
      .get(`http://www.omdbapi.com/?s=${movies}&apikey=c154daad`)
      .then(res => res.data);
  });
  console.log(query?.data?.Search);
  return query.isLoading
    ? '...loading'
    : query.isError
    ? 'error fetching data'
    : query?.data?.Search
    ? query?.data?.Search.map(data => {
        return <h1>{data.Title}</h1>;
      })
    : null;
}
// return query.isLoading ? (
//   '...loading'
// ) : query.isError ? (
//   '...loading error'
// ) : (
//   <div>
//     {query?.data?.Search.map(data => {
//       console.log('triggered', data?.Title);
//       return <h1>{data?.Title}</h1>;
//     })}
//   </div>
// );

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
