import React from 'react';

export default function PublishedStatusIcon({ publishedStatus }) {
  return publishedStatus ? (
    <div className='PublishedStatusIcon'>published</div>
  ) : (
    <div className='PublishedStatusIcon unpublished'>unpublished</div>
  );
}
