import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchMovieSearch } from 'services/movies-api';
import { SearchBar } from 'components/searchBar';
import { SearchResults } from 'components/searchResults';

const Movies = () => {
  const history = useHistory();
  const location = useLocation();
  const locationSearch = new URLSearchParams(location.search).get('query');

  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!locationSearch) return;
    fetchMovieSearch(locationSearch).then(({ results }) => setResults(results));
  }, [locationSearch]);

  const handleSearch = search => {
    setResults(null);
    history.push({ ...location, search: `query=${search}` });
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {results && <SearchResults results={results} />}
    </>
  );
};
export default Movies;
