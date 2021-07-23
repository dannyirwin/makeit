import React from 'react';
import ProjectPreview from './ProjectPreview';
import UserPreview from './UserPreview';

export default function SearchResults({
  searchResults,
  searchType,
  user,
  setUser
}) {
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
        return searchResults.users.map(searchResultUser => {
          return (
            <UserPreview
              searchResultUser={searchResultUser}
              user={user}
              setUser={setUser}
            />
          );
        });
      case 'projects':
        return searchResults.projects.map(project => {
          return <ProjectPreview project={project} />;
        });
      default:
        return <p>No results found, try another search</p>;
    }
  };

  return <div>{showSearchResults()}</div>;
}
