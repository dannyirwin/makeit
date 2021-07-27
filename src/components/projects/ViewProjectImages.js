import React from 'react';
import ViewProjectImage from './ProjectImage';

export default function ViewProjectImages({ images }) {
  const showImages = () => {
    return images.slice(1).map((image, i) => {
      return <ViewProjectImage key={image.id} image={image} index={i} />;
    });
  };
  return <aside className='ProjectImages'>{showImages()}</aside>;
}
