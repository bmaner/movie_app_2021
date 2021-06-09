import React, { useState, useEffect } from 'react';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    await fetch('http://localhost:5555')
      .then(res => res.json())
      .then(result => {
        setMovies(result);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="total_container">
      <Navigation />
      <Home movies={movies} isLoading={isLoading} />
    </div>
  );
}

export default App;
