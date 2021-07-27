import React from 'react';
import {
  fetchDeleteImage,
  fetchPostImage
} from '../../../utilities/fetchUtilities';
import AddImageForm from './AddImageForm';
import ImageEditorPreview from './ImageEditorPreview';

import '../../../css/ProjectImagesEditor.css';

export default function ProjectImagesEditor({
  images,
  projectId,
  setImages,
  setCurrentProject
}) {
  const removeImage = imageId => {
    const newImages = [...images].filter(oldImage => oldImage.id !== imageId);
    setImages(newImages);
    fetchDeleteImage(imageId);
  };

  const addImage = image => {
    console.log(image);
    fetchPostImage(image)
      .then(image => setImages([...images, image]))
      .then(_ => console.log(images));
  };

  const showImages = () => {
    if (images?.length > 0) {
      return images.map(image => {
        return <ImageEditorPreview image={image} removeImage={removeImage} />;
      });
    } else {
      return (
        <div>
          <p>Add images to your project.</p>
          <p>The first image will be used as the preview image.</p>;
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
