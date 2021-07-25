import React from 'react';

export default function NavBtn({
  pageString,
  currentPage,
  setCurrentPage,
  setCurrentProject
}) {
  const classNames = () => {
    let classNames = '';
    if (pageString === currentPage) {
      classNames += ' selected';
    }
    return classNames;
  };
  return (
    <button
      className={classNames()}
      onClick={() => {
        setCurrentPage(pageString);
        setCurrentProject();
      }}
    >
      {pageString}
    </button>
  );
}
