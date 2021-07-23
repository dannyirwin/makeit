import React, { useState } from 'react';
import ExploreSearch from './ExploreSearch';
import SearchResults from './SearchResults';

import '../../css/Explore.css';

export default function Explore({ user, setUser }) {
  const [searchResults, setSearchResults] = useState();
  return (
    <div className='Explore'>
      <ExploreSearch setSearchResults={setSearchResults} />
      <SearchResults
        searchResults={searchResults}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}
