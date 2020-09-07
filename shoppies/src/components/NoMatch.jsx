import React from 'react';
import './NoMatch.css';
const NoMatch = () => {
  return (
    <div className="noMatch">
      <h2 className="intro">Hey Shopify Team!</h2>
      <p className="intoParagraph">
        Welcome and thank you for joining us this year at the Shoppies. I wanted
        to give you a brief rundown on how everything works before you jump into
        testing the functionality.
      </p>

      <p className="intoParagraph">
        First, I really appreciate your time, so cool that I am being considered
        for this role!{' '}
      </p>
      <p className="intoParagraph">
        To get started, simply look for any movie in the search bar above. When
        searching you will notice a few things
      </p>
      <ul>
        <li>
          Queries are capped at 10 results. API limitation but I would have
          loved to have worked with some pagination
        </li>
        <li>
          Some queries do not return any result or they return too many results!
          Continue to search for your movie and I promise it will show up!
        </li>
      </ul>
      <p className="intoParagraph">
        When you find the movie you are looking for, nominate it!
      </p>
      <ul>
        <li>
          The nomination section will be located on the right of your screen and
          display your selected movie{' '}
        </li>
        <li>
          The movie nomination button you just selected will now be disabled and
          the text will update to reflect that this is a movie you have
          nominated
        </li>
        <li>
          If you made a mistake, no worries, just remove the movie from your
          nomination list by selecting the red "x" to the right of the movie
          title
        </li>
        <li>
          Lastly, if your connection goes out or you accidentally exit the
          browser, I have you covered, all of your Shoppies nominations and
          search results will stay waiting for your return
        </li>
      </ul>
    </div>
  );
};

export default NoMatch;
