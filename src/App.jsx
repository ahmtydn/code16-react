/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

import NavBar from './components/NavBar';
import { FallingLines } from 'react-loader-spinner';
import * as JsSearch from 'js-search';
import About from './components/About';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [allData, setAll] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [search] = useState(new JsSearch.Search(['title', 'genres']));
  const [isMoviesSelected, setIsMoviesSelected] = useState(true);
  const [selectedGenres, setGenres] = useState([]);
  search.addIndex('title');
  search.addIndex('genres');

  const BASE_URL = 'https://api.ahmetaydin.dev/api/v1';
  const getMovieRequest = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 12,
      }),
    });
    const responseJson = await response.json();

    if (responseJson.data) {
      setMovies(responseJson.data);
      setAll(responseJson.data);
      search.addDocuments(
        responseJson.data.filter(
          (movie) => movie.thumbnail !== null && movie.thumbnail !== undefined
        )
      );
    }
    setLoading(false);
  };
  const searchMovies = async () => {
    if (
      searchValue !== undefined &&
      searchValue !== '' &&
      searchValue !== null
    ) {
      setLoading(true);

      try {
        Promise.resolve(search.search(searchValue)).then((result) => {
          if (result.length === 0) {
            setMovies([]);
          } else {
            setMovies(result);
          }
        });
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setMovies(allData);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  useEffect(() => {
    searchMovies();
  }, [searchValue]);

  useEffect(() => {
    if (selectedGenres.length > 0) {
      const filteredMovies = allData.filter((movie) => {
        return selectedGenres.some((genre) => {
          return movie.genres.includes(genre);
        });
      });
      setMovies(filteredMovies);
    } else {
      setMovies(allData);
    }
  }, [selectedGenres]);

  return (
    <>
      <div className='content'>
        <div>
          <NavBar
            setIsMoviesSelected={setIsMoviesSelected}
            isMoviesSelected={isMoviesSelected}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            setGenres={setGenres}
            genres={Array.from(
              new Set(allData.map((movie) => movie.genres).flat())
            )}
          />

          {isMoviesSelected ? (
            loading ? (
              <div className='loading'>
                <FallingLines />
              </div>
            ) : movies.length == 0 ? (
              <div className='loading'>Aradığınız film bulunamadı!</div>
            ) : (
              <div>
                <MovieList movies={movies} setMovies={setMovies} />
              </div>
            )
          ) : (
            <About></About>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
