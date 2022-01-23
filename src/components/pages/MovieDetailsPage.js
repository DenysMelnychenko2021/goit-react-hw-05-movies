import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import { MovieCard } from 'components/movieСard';

import { fetchMovieDetails } from 'services/movies-api';

const MovieDetailsPage = () => {
  const { idMovie } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [prevLocation] = useState(location?.state?.from);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(idMovie).then(res => {
      return setMovie(res);
    });
  }, [idMovie]);

  function goBack() {
    history.push(prevLocation ?? '/');
  }

  return (
    <>
      <button onClick={goBack} type="button">
        Назад к списку фильмов
      </button>

      <MovieCard movie={movie} />
    </>
  );
};

export default MovieDetailsPage;
