import React, { useState } from 'react';
import { storage } from '../../../firebase/firebase';

export default function AddImageForm({ addImage, projectId }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (file !== null) {
      handleUpload(e);
    } else {
      const image = {
        image_url: formData.get('imageUrl'),
        caption: formData.get('caption'),
        alt: formData.get('alt'),
        project_id: projectId
      };
      addImage(image);
      e.target.reset();
    }
  };

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async e => {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on('state_changed', console.log, console.error, () => {
      ref.getDownloadURL().then(url => {
        setFile(null);
        const formData = new FormData(e.target);
        const image = {
          image_url: url,
          caption: formData.get('caption'),
          alt: formData.get('alt'),
          project_id: projectId
        };
        addImage(image);
        e.target.reset();
      });
    });
  };
  return (
    <form className='AddImageForm' onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor='imageUrl'>Image Url:</label>
        <input type='url' placeholder='Image Url' name='imageUrl'></input>
        <p>Or</p>
        <input type='file' name='imageFile' onChange={handleChange}></input>
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
