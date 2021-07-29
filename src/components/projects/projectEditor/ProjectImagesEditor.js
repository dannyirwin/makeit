import React from 'react';
import {
  fetchDeleteImage,
  fetchPostImage
} from '../../../utilities/fetchUtilities';
import { storage } from '../../../firebase/firebase';

import AddImageForm from './AddImageForm';
import ImageEditorPreview from './ImageEditorPreview';

import '../../../css/ProjectImagesEditor.css';

export default function ProjectImagesEditor({ images, projectId, setImages }) {
  const removeImage = imageId => {
    const newImages = [...images].filter(oldImage => oldImage.id !== imageId);
    setImages(newImages);
    fetchDeleteImage(imageId);
  };

  const addImage = image => {
    fetchPostImage(image).then(image => setImages([...images, image]));
  };

  const showImages = () => {
    if (images?.length > 0) {
      return images.map(image => {
        return <ImageEditorPreview image={image} removeImage={removeImage} />;
      });
    } else {
      return (
        <div className='no-images'>
          <p>Add images to your project.</p>
          <p>The first image will be used as the preview image.</p>
        </div>
      );
    }
  };
  return (
    <div className='ProjectImagesEditor'>
      <div className='image-preview-container'>{showImages()}</div>
      <AddImageForm addImage={addImage} projectId={projectId} />
    </div>
  );
}
