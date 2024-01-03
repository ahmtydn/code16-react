import PropTypes from 'prop-types';

const SearchBox = (props) => {
  return (
    <div className='search-bar-container'>
      <input
        className=''
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Search'
      ></input>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBox;
