import React from 'react';

export default function ProjectImage({ image }) {
  return (
    <div className='ProjectImage'>
      <img src={image.image_url} alt={image.alt}></img>
    </div>
  );
}
