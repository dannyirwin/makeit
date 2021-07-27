import React from 'react';

export default function AddImageForm({ addImage, projectId }) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const image = {
      image_url: formData.get('imageUrl'),
      caption: formData.get('caption'),
      alt: formData.get('alt'),
      project_id: projectId
    };
    addImage(image);
    e.target.reset();
  };
  return (
    <form className='AddImageForm' onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor='imageUrl'>Url:</label>
        <input
          type='url'
          placeholder='Image Url'
          name='imageUrl'
          required
        ></input>
      </div>
      <div className='input-container'>
        <label htmlFor='alt'>Image Alt:</label>
        <input type='text' name='alt' maxLength='255'></input>
      </div>
      <div className='input-container'>
        <label htmlFor='caption'>Image Caption:</label>
        <input
          type='text'
          name='caption'
          maxLength='255'
          placeholder='up to 255 characters'
        ></input>
      </div>
      <input type='submit' value='Add Image'></input>
    </form>
  );
}
