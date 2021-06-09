import React, { useState } from 'react';
import Movie from '../components/Movie';
import Detail from '../components/Detail';
import './Home.css';

function Home({ movies, isLoading }) {
  const [currMovie, setCurrMovie] = useState({});

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <>
          <Detail currMovie={currMovie} />
          <div className="movies">
            {movies.map((movie, idx) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  currMovie={currMovie}
                  setCurrMovie={setCurrMovie}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
