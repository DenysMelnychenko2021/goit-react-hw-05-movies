import { useState, useEffect } from 'react';

import { MoviesTrendingList } from 'components/moviesTrendingList';
import { fetchMoviesTrending } from 'services/movies-api';

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState(null);

  useEffect(() => {
    fetchMoviesTrending().then(({ results }) => {
      return setMoviesTrending(results);
    });
  }, []);

  return (
    <>
      {moviesTrending && <MoviesTrendingList moviesTrending={moviesTrending} />}
    </>
  );
};
export default HomePage;
