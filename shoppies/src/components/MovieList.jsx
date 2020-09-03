import React from 'react';
import './MovieList.css';
const MovieList = ({ nominations, setNominations, query }) => {
  return (
    <div className="queryContainer">
      {query?.data?.Search.map((data, key) => {
        let nominationTitles = nominations.map(data => data.title);
        return (
          <div className="queryMovie" key={key}>
            <p>{data.Title}</p>
            <img
              height="200px"
              width="142px"
              src={data.Poster}
              alt={data.Title}
            />
            <p>Release Date: {data.Year}</p>
            <div>
              <button
                type="button"
                disabled={nominationTitles.includes(data.Title)}
                onClick={() => {
                  let entry = { id: data.imdbID, title: data.Title };
                  if (nominations.length === 0) {
                    setNominations([entry]);
                  } else if (nominations.length < 5) {
                    setNominations([...nominations, entry]);
                  } else {
                    alert('You can only nominate 5 movies for the Shoppies!');
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
