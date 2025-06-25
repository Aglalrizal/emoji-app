import PropTypes from "prop-types";
import styles from "./Search.module.css";

const Search = ({ onChange, value }) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search..."
      onChange={onChange}
      value={value}
    ></input>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
