import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
