import React from 'react';
import UserPreview from './UserPreview';

export default function SearchResults({ searchResults, searchType }) {
  let resultType = searchResults?.users
    ? 'users'
    : searchResults?.projects
    ? 'projects'
    : null;
  const showSearchResults = () => {
    console.log(searchResults);
    if (!searchResults) {
      return null;
    }
    switch (resultType) {
      case 'users':
        return searchResults.users.map(user => {
          return <UserPreview user={user} />;
        });
      default:
        return <p>No results found, try another search</p>;
    }
  };
  return <div>{showSearchResults()}</div>;
}
