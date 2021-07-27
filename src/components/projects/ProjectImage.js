import React from 'react';

export default function ProjectImage({ image, index }) {
  return (
    <div className='ProjectImage'>
      <img src={image.image_url} alt={image.alt}></img>
      <p>Figure {index + 1}</p>
      <p>{image.caption}</p>
    </div>
  );
}
