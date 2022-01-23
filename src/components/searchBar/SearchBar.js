import { useState } from 'react';

import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs'; //npm install react-icons --save
import { toast } from 'react-toastify'; //npm install --save react-toastify

export const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearshChange = ({ currentTarget }) => {
    setSearch(currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.info('Вы ничего не ввели', { autoClose: 7000 });
      return;
    }
    handleSearch(search);
    setSearch('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button type="submit" className="button">
        <span className="button-label">
          <BsSearch /> Поиск
        </span>
      </button>

      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Введите название фильма"
        name="search"
        value={search}
        onChange={handleSearshChange}
      />
    </form>
  );
};

SearchBar.propTypes = { handleSearch: PropTypes.func.isRequired };
