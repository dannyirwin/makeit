import React, { useState } from 'react';
import { fetchSearch } from '../../utilities/fetchUtilities';

export default function ExploreSearch({ setSearchResults }) {
  const [searchType, setSearchType] = useState('projects');
  const [searchValue, setSearchValue] = useState();

  const handleSearch = e => {
    e.preventDefault();
    fetchSearch(searchValue, searchType).then(users => {
      setSearchResults(users);
      e.target.reset();
      setSearchValue();
    });
  };

  const handleSetSearchType = (e, type) => {
    e.preventDefault();
    setSearchType(type);
  };

  const classNames = buttonValue => {
    let classNames = '';
    if (buttonValue === searchType) {
      classNames += ' selected';
    }
    return classNames;
  };

  return (
    <form className='ExploreSearch' onSubmit={handleSearch}>
      <p>Filter:</p>
      <button
        className={classNames('users')}
        onClick={e => handleSetSearchType(e, 'users')}
      >
        Users
      </button>
      <button
        className={classNames('projects')}
        onClick={e => handleSetSearchType(e, 'projects')}
      >
        Projects
      </button>
      <label htmlFor='searchValue'></label>
      <input
        onChange={e => setSearchValue(e.target.value)}
        name='searchValue'
        placeholder='Search...'
        required
      ></input>
      <input type='submit' value='Search'></input>
    </form>
  );
}
