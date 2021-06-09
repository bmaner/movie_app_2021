import React, { useState } from 'react';
import '../routes/Home.css';

function Detail({ currMovie }) {
  return (
    <section className="detail_container">
      {currMovie.title}
      {/* <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div> */}
    </section>
  );
}

export default Detail;
