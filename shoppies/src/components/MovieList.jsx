import React from 'react';
import './MovieList.css';
const MovieList = ({ query, nomination, setNomination }) => {
  return (
    <div className="queryContainer">
      {query?.data?.Search.map((data, key) => {
        let nominationTitles = nomination.map(data => data.id);
        let disabled = () => {
          if (
            nominationTitles.includes(data.imdbID) ||
            nomination.length >= 5
          ) {
            return true;
          }
          return false;
        };
        return (
          <div className="queryMovie" key={key}>
            <p>{data.Title}</p>
            <img
              height="250px"
              width="192px"
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
                className="nomButton"
                type="button"
                disabled={disabled()}
                onClick={() => {
                  let entry = {
                    id: data.imdbID,
                    title: data.Title,
                    poster: data.Poster
                  };
                  if (nomination.length === 0) {
                    setNomination([entry]);
                  } else if (nomination.length < 5) {
                    setNomination([...nomination, entry]);
                  }
                }}
              >
                {nominationTitles.includes(data.imdbID)
                  ? 'NOMINATED'
                  : 'Nominate'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
