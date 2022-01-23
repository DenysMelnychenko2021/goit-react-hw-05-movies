import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import s from './Cast.module.css';

import { fetchMovieCast } from 'services/movies-api';

const Cast = ({ idMovie }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(idMovie).then(res => setCast(res.cast));
  }, [idMovie]);

  return (
    <ul className={s.actorList}>
      {cast &&
        cast.map(({ cast_id, character, name, profile_path }) => (
          <li key={cast_id} className={s.actorItem}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                width="100"
              ></img>
            )}
            <p className={s.actorName}>{name}</p>
            <p>{character}</p>
          </li>
        ))}
    </ul>
  );
};

Cast.propTypes = {
  idMovie: PropTypes.number.isRequired,
};

export default Cast;
