import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import s from './MoviesTrendingList.module.css';

export const MoviesTrendingList = ({ moviesTrending }) => {
  return (
    <>
      <h1 className={s.heading}>В тренде сегодня</h1>
      <ul className={s.list}>
        {moviesTrending.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesTrendingList.propTypes = {
  moviesTrending: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
