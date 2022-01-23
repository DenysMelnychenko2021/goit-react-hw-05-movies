import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from './Reviews.module.css';

import { fetchMovieReviews } from 'services/movies-api';

const Reviews = ({ idMovie }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(idMovie).then(({ results }) => setReviews(results));
  }, [idMovie]);

  return reviews && reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p className={s.author}>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>По этому фильму нет отзывов</p>
  );
};

Reviews.propTypes = {
  idMovie: PropTypes.number.isRequired,
};

export default Reviews;
