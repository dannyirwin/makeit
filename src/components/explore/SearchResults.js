import React from 'react';
import ProjectPreview from '../ProjectPreview';
import UserPreview from '../UserPreview';

export default function SearchResults({
  searchResults,
  searchType,
  user,
  setUser,
  setCurrentPage,
  setCurrentProject
}) {
  let resultType = searchResults?.users
    ? 'users'
    : searchResults?.projects
    ? 'projects'
    : null;

  const showSearchResults = () => {
    if (!searchResults) {
      return null;
    }
    switch (resultType) {
      case 'users':
        return searchResults.users.map(searchResultUser => {
          return (
            <UserPreview
              otherUser={searchResultUser}
              user={user}
              setUser={setUser}
              setCurrentProject={setCurrentProject}
              setCurrentPage={setCurrentPage}
            />
          );
        });
      case 'projects':
        return searchResults.projects.map(project => {
          return (
            <ProjectPreview
              project={project}
              user={user}
              setUser={setUser}
              setCurrentPage={setCurrentPage}
              setCurrentProject={setCurrentProject}
            />
          );
        });
      default:
        return <p>No results found, try another search</p>;
    }
  };

  return <div className='SearchResults'>{showSearchResults()}</div>;
}
