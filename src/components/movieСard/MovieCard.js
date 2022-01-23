import { lazy, Suspense } from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MovieCard.module.css';

const Cast = lazy(() =>
  import('components/cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('components/reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

export const MovieCard = ({ movie }) => {
  const { url, path } = useRouteMatch();

  return (
    <>
      {movie && (
        <div className={s.card}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={s.filmDescription}>
            <h1>{movie.title}</h1>
            <p>Дата выхода: {movie.release_date}</p>
            <p className={s.genres}>
              Жанр:
              {movie.genres.map(({ id, name }) => (
                <span key={id}>{name}</span>
              ))}
            </p>
            <p>{movie.overview}</p>
            <div className={s.box}>
              <NavLink to={`${url}/cast`}>Актёры</NavLink>
              <NavLink to={`${url}/reviews`}>Отзывы</NavLink>
              <a
                href={movie.homepage}
                target="_blank"
                rel="noreferrer noopener"
              >
                Сайт фильма
              </a>
            </div>
            <Suspense fallback={<p>Загружаем...</p>}>
              <Route path={`${path}/cast`}>
                <Cast idMovie={movie.id} />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews idMovie={movie.id} />
              </Route>
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    overview: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
