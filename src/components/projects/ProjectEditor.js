import { useState } from 'react';

import { fetchSaveProject } from '../../utilities/fetchUtilities';

import '../../css/ProjectEditor.css';

export default function ProjectEditor({ user, project, setCurrentPage }) {
  const [title, setTitle] = useState(project?.title);
  const [description, setDescription] = useState(project?.description);
  const [previewImage, setPreviewImage] = useState(project?.previewImage);
  const [content, setContent] = useState(project?.content);
  const [isPublished, setIsPublished] = useState(
    project?.is_published || false
  );

  const buildNewProject = () => {
    return {
      title,
      description,
      previewImage,
      content,
      isPublished,
      author_id: user.id
    };
  };

  const handleSaveProject = e => {
    e.preventDefault();
    console.log(buildNewProject());
    //fetchSaveProject(buildNewProject());
  };

  const handleSaveAndPublishProject = e => {
    e.preventDefault();
    setIsPublished(true);
    handleSaveProject(e);
  };

  const handleExit = e => {
    e.preventDefault();
    setCurrentPage('MyProfile');
  };

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
        <label htmlFor='previewImage'>Preview Image</label>
        <input
          onChange={e => setPreviewImage(e.target.value)}
          type='url'
          name='previewImage'
          value={previewImage}
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
        <button onClick={handleSaveProject}>Save Project</button>
        <button onClick={handleSaveAndPublishProject}>
          Save and Publish Project
        </button>
        <button onClick={handleExit}>Exit Without Saving</button>
      </div>
    </form>
  );
}
