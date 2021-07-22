import { useState } from 'react';

export default function ProjectEditor({ project }) {
  const [title, setTitle] = useState(project?.title);
  const [description, setDescription] = useState(project?.description);
  const [thumbnailImage, setThumbnailImage] = useState(project?.thumbnailImage);
  const [content, setContent] = useState(project?.content);

  return (
    <form className='ProjectEditor'>
      <div className='input-container'>
        <label htmlFor='title'>Project Title</label>
        <input
          onChange={e => setTitle(e.target.value)}
          type='text'
          name='title'
          value={title}
          required
        ></input>
      </div>
      <div className='input-container'>
        <label htmlFor='description'>Description</label>
        <textarea
          onChange={e => setDescription(e.target.value)}
          name='description'
          value={description}
          required
        ></textarea>
      </div>
      <div className='input-container'>
        <label htmlFor='description'>Preview Image</label>
        <input
          onChange={e => setThumbnailImage(e.target.value)}
          type='url'
          name='thumbnailImage'
          value={thumbnailImage}
        ></input>
      </div>
      <div className='input-container'>
        <label htmlFor='password'>Content</label>
        <textarea
          onChange={e => setContent(e.target.value)}
          type='text'
          name='password'
          value={content}
          required
        ></textarea>
      </div>
      <div className='input-container'>
        <button>Save Project</button>
        <button>Save and Publish Project</button>
        <button>Exit Without Saving</button>
      </div>
    </form>
  );
}
