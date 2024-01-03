/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';

const MovieList = (props) => {
  const handleImageError = (index) => {
    const newMovies = props.movies.filter((movie, i) => i !== index);
    props.setMovies(newMovies);
  };
  const [showDescription, setShowDescription] = useState(null);

  return (
    <div className='movie-container'>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className='image-container d-flex justify-content-start m-3'
          onMouseEnter={() => setShowDescription(index)}
          onMouseLeave={() => setShowDescription(null)}
        >
          <img
            className='movie-image'
            src={movie.thumbnail}
            alt='movie'
            onError={() => handleImageError(index)}
          ></img>
          {showDescription === index && (
            <div className='movie-description'>
              <p>{movie.extract}</p>
              <div className='movie-genres'>
                {movie.genres.map((genre, i) => (
                  <span key={i} className='genre'>
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className='movie-details'>
            <p>{movie.year}</p>
            <h5>{movie.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  setMovies: PropTypes.func.isRequired,
};

export default MovieList;
