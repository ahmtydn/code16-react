import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import { FallingLines } from 'react-loader-spinner';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const BASE_URL = 'https://www.api.ahmetaydin.dev/api/v1';
  const getMovieRequest = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}/movies`);
    const responseJson = await response.json();

    if (responseJson.data) {
      setMovies(responseJson.data);
    }
    setLoading(false);
  };
  const searchMovies = async () => {
    if (searchValue !== undefined) {
      setLoading(true);

      const abortController = new AbortController();
      const signal = abortController.signal;

      const searchUrl = `${BASE_URL}/search`;
      try {
        const response = await fetch(searchUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: searchValue,
          }),
          signal, // İsteğe abort sinyali ekle
        });
        const responseJson = await response.json();

        if (responseJson.status === 'success') {
          setMovies(responseJson.data);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }

      // Önceki isteği iptal et
      abortController.abort();
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  useEffect(() => {
    searchMovies();
  }, [searchValue]);

  return (
    <>
      <div className='container-fluid movie-app'>
        <div>
          <div className='tab-bar'>
            <MovieListHeading heading='Movies' />
            <SearchBox value={searchValue} setSearchValue={setSearchValue} />
          </div>
          {loading ? (
            <div className='loading'>
              <FallingLines />
            </div>
          ) : movies.length == 0 ? (
            <div className='loading'>Aradığınız film bulunamadı!</div>
          ) : (
            <MovieList movies={movies} setMovies={setMovies} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
