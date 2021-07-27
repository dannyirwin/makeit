import React from 'react';

export default function ImageEditorPreview({ image, removeImage }) {
  return (
    <div className='ImageEditorPreview'>
      <img src={image.image_url} alt={image.alt}></img>
      {image.caption && <p>CAPTION: {image.caption}</p>}
      <button
        className='delete-image-btn'
        onClick={() => removeImage(image.id)}
      >
        DELETE
      </button>
    </div>
  );
}
