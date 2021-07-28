import React from 'react';
import ProjectPreview from '../ProjectPreview';
import UserPreview from '../UserPreview';

export default function SearchResults({ searchResults, searchType }) {
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
              key={searchResultUser.id}
              otherUser={searchResultUser}
            />
          );
        });
      case 'projects':
        return searchResults.projects.map(project => {
          return <ProjectPreview key={project.id} project={project} />;
        });
      default:
        return <p>No results found, try another search</p>;
    }
  };

  return <div className='SearchResults'>{showSearchResults()}</div>;
}
