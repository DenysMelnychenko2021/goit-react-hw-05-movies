import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './SearchResults.module.css';

export const SearchResults = ({ results }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {results.map(({ title, id }) => (
        <li key={id}>
          <Link to={{ pathname: `movies/${id}`, state: { from: location } }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
