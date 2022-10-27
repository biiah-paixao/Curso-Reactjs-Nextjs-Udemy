import P from 'prop-types';
import './styles.css';

export const InputSearch = ({ handleChange, searchValue }) => {
  return (
    <input
      className="search-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

InputSearch.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};
