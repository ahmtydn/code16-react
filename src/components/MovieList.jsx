/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const MovieList = (props) => {
  const handleImageError = (index) => {
    const newMovies = props.movies.filter((movie, i) => i !== index);
    props.setMovies(newMovies);
  };

  return (
    <div className='movie-container'>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className='image-container d-flex justify-content-start m-3'
        >
          <img
            className='movie-image'
            src={movie.thumbnail}
            alt='movie'
            onError={() => handleImageError(index)}
          ></img>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  setMovies: PropTypes.func.isRequired, // Add setMovies to propTypes
};

export default MovieList;
