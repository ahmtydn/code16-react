import '../styles/NavBar.css';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import FilterMovies from './FilterMovies';

const NavBar = (props) => {
  const {
    isMoviesSelected,
    setIsMoviesSelected,
    setSearchValue,
    searchValue,
    setGenres,
    genres,
  } = props;

  const handleMoviesClick = () => {
    setIsMoviesSelected(true);
  };

  const handleAboutClick = () => {
    setIsMoviesSelected(false);
  };

  return (
    <div className='nav-bar'>
      <div className='nav-buttons'>
        <a
          onClick={handleMoviesClick}
          className={isMoviesSelected ? 'active' : ''}
        >
          Movies
        </a>
        <a
          onClick={handleAboutClick}
          className={!isMoviesSelected ? 'active' : ''}
        >
          About
        </a>
      </div>

      <div className='search-bar'>
        {isMoviesSelected ? (
          <SearchBox value={searchValue} setSearchValue={setSearchValue} />
        ) : null}
      </div>
      <FilterMovies genres={genres} setGenres={setGenres} />
    </div>
  );
};

NavBar.propTypes = {
  isMoviesSelected: PropTypes.bool.isRequired,
  setIsMoviesSelected: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setGenres: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
};

export default NavBar;
