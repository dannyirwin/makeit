import React from 'react';
import ViewProjectImage from './ProjectImage';

export default function ViewProjectImages({ images }) {
  const showImages = () => {
    return images.slice(1).map(image => {
      return <ViewProjectImage image={image} />;
    });
  };
  return <aside className='ProjectImages'>{showImages()}</aside>;
}
