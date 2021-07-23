import { useState } from 'react';

import {
  fetchPostProject,
  fetchPatchProject
} from '../../utilities/fetchUtilities';

import '../../css/ProjectEditor.css';

export default function ProjectEditor({
  user,
  project,
  setCurrentPage,
  setCurrentProject,
  setUser
}) {
  const [title, setTitle] = useState(project?.title);
  const [description, setDescription] = useState(project?.description);
  const [previewImage, setPreviewImage] = useState(project?.preview_image_url);
  const [content, setContent] = useState(project?.content);
  const [isPublished, setIsPublished] = useState(
    project?.is_published || false
  );
  const [id, setId] = useState(project?.id || null);

  const buildNewProject = () => {
    const newProject = {
      title,
      description,
      preview_image_url: previewImage,
      content,
      is_published: isPublished,
      author_id: user.id
    };
    if (id) {
      newProject.id = id;
    }
    return newProject;
  };

  const handleSaveProject = async e => {
    e.preventDefault();
    if (project?.id) {
      return await fetchPatchProject(buildNewProject()).then(
        ({ user, project }) => {
          setUser(user);
          setCurrentProject(project);
          setId(project.id);
        }
      );
    } else {
      return await fetchPostProject(buildNewProject()).then(
        ({ user, project }) => {
          setUser(user);
          setCurrentProject(project);
          setId(project.id);
        }
      );
    }
  };

  const handleSaveAndPublishProject = e => {
    e.preventDefault();
    handleSaveProject(e).then(_ => {
      setCurrentPage('MyProfile');
      setCurrentProject();
    });
  };

  const handleExit = e => {
    e.preventDefault();
    setCurrentProject();
    setCurrentPage('MyProfile');
  };

  const handlePublishButton = () => {
    const toggleIsPublished = e => {
      e.preventDefault();
      setIsPublished(!isPublished);
    };
    return isPublished ? (
      <div className='input-container'>
        <p>Your project is currently Published</p>
        <button onClick={toggleIsPublished}>Set to Draft</button>
      </div>
    ) : (
      <div className='input-container'>
        <p>Your project is currently Unpublished</p>
        <button onClick={toggleIsPublished}>Publish Project</button>
      </div>
    );
  };

  console.log('rendering');
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
      {handlePublishButton()}
      <div className='input-container'>
        <button onClick={handleSaveProject}>Save Project</button>
        <button onClick={handleSaveAndPublishProject}>Save and Exit</button>
        <button onClick={handleExit}>Exit Without Saving</button>
      </div>
    </form>
  );
}
