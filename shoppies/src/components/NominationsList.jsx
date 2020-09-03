import React, { useEffect } from 'react';
import './NominationsList.css';
const NominationsList = ({ nominations, setNominations }) => {
  console.log('nominations list view', nominations);
  let nominationsLeft = 5 - nominations.length;
  return (
    <div className="nominationsContainer">
      {nominationsLeft === 0 ? (
        <h2>You have nominated 5 movies!</h2>
      ) : (
        <h2>{nominationsLeft} Nominations Left</h2>
      )}
      {nominations.length === 0
        ? 'You have not nominated any movies'
        : nominations.map((data, key) => {
            return (
              <div key={key}>
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
                  Remove Nomination
                </button>
              </div>
            );
          })}
    </div>
  );
};

export default NominationsList;
