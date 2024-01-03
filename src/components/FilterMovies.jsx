import { useState } from 'react';
import '../styles/FilterMovies.css';
import { FilterAlt } from '@mui/icons-material';
import PropTypes from 'prop-types';

const FilterMovies = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { setGenres, genres } = props;
  const handleToggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleGenreSelect = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selected) => selected !== genre)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleConfirmSelection = () => {
    // Seçilen türleri burada kullanabilir veya başka bir işleme geçirebilirsiniz
    console.log('Selected Genres:', selectedGenres);
    setGenres(selectedGenres);
    setShowOverlay(false);
  };

  return (
    <div className='filter-movies'>
      <FilterAlt className='filter-btn' onClick={handleToggleOverlay} />
      {showOverlay && (
        <div className='filter-overlay'>
          <div className='genre-list'>
            {genres.map((genre, index) => (
              <label key={index} className='genre-item'>
                <input
                  type='checkbox'
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreSelect(genre)}
                />
                {genre}
              </label>
            ))}
          </div>
          <div className='confirm-container'>
            {' '}
            <button className='confirm-button' onClick={handleConfirmSelection}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

FilterMovies.propTypes = {
  genres: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired,
};
export default FilterMovies;
