import React, { useState } from 'react';
import './NominationsList.css';
import useLocalStorage from '../Hooks/UseLocalStorage';
const NominationsList = ({ nominations, setNominations }) => {
  let nominationsLeft = 5 - nominations.length;
  return (
    <div className="nominationsContainer">
      {nominationsLeft === 0 ? (
        <h2>Submit Nominations</h2>
      ) : (
        <h2>{nominationsLeft} Nominations Left</h2>
      )}
      {nominations.length === 0
        ? null
        : nominations.map((data, key) => {
            return (
              <div className="nominationMovie" key={key}>
                <div className="nominationBox">
                  <img
                    height="100px"
                    width="75px"
                    src={
                      data.poster === 'N/A'
                        ? 'https://avatars1.githubusercontent.com/u/8085?s=200&v=4'
                        : data.poster
                    }
                    alt={data.Title}
                  />
                  <p>{data.title}</p>
                  <button
                    type="button"
                    onClick={() => {
                      let removeMovie = nominations.filter(
                        movie => movie.id !== data.id
                      );
                      setNominations(removeMovie);
                    }}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default NominationsList;
