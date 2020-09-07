import React from 'react';
import './NominationsList.css';
import DeleteIcon from './icons8-delete-48.png';
const NominationsList = ({ nomination, setNomination }) => {
  let nominationsLeft = 5 - nomination.length;
  return (
    <div className="nominationsContainer">
      {nominationsLeft === 0 ? (
        <h2>Submit Nominations</h2>
      ) : nominationsLeft === 1 ? (
        <h2>{nominationsLeft} Nomination Left</h2>
      ) : (
        <h2>{nominationsLeft} Nominations Left</h2>
      )}
      {nomination.length === 0
        ? null
        : nomination.map((data, key) => {
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
                    className="removeButton"
                    type="button"
                    onClick={() => {
                      let removeMovie = nomination.filter(
                        movie => movie.id !== data.id
                      );
                      setNomination(removeMovie);
                    }}
                  >
                    <img src={DeleteIcon} alt="Delete Icon" height="20px" />
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default NominationsList;
