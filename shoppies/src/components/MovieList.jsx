import React from 'react';
import './MovieList.css';
import useLocalStorage from '../Hooks/UseLocalStorage';
const MovieList = ({ nominations, setNominations, query, setTest }) => {
  const [nom, setNom] = useLocalStorage([], 'nominations');
  console.log('setTest', setTest);
  return (
    <div className="queryContainer">
      {query?.data?.Search.map((data, key) => {
        // console.log('data', data.id);
        let nominationTitles = nom.map(data => data.id);
        let disabled = () => {
          if (nominationTitles.includes(data.imdbID) || nom.length >= 5) {
            return true;
          }
          return false;
        };
        return (
          <div className="queryMovie" key={key}>
            <p>{data.Title}</p>
            <img
              height="200px"
              width="142px"
              src={
                data.Poster === 'N/A'
                  ? 'https://avatars1.githubusercontent.com/u/8085?s=200&v=4'
                  : data.Poster
              }
              alt={data.Title}
            />
            <p>Release Date: {data.Year}</p>
            <div>
              <button
                type="button"
                disabled={disabled()}
                onClick={() => {
                  let entry = {
                    id: data.imdbID,
                    title: data.Title,
                    poster: data.Poster
                  };
                  if (nom.length === 0) {
                    setNominations([entry]);
                    setNom([entry]);
                  } else if (nom.length < 5) {
                    setNominations([...nominations, entry]);
                    setNom([...nom, entry]);
                  }
                }}
              >
                Nominate
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
