import { useState, useEffect } from 'react';

import {
  fetchPostProject,
  fetchPatchProject,
  fetchGetProject
} from '../../../utilities/fetchUtilities';

import '../../../css/ProjectEditor.css';
import TextEditor from './TextEditor';
import ProjectImagesEditor from './ProjectImagesEditor';

export default function ProjectEditor({
  user,
  project,
  setCurrentPage,
  setCurrentProject,
  setUser
}) {
  const [title, setTitle] = useState(project?.title || '');
  const [description, setDescription] = useState(project?.description || '');
  const [previewImage, setPreviewImage] = useState(
    project?.preview_image_url || ''
  );
  const [images, setImages] = useState(project ? project.images : []);
  const [content, setContent] = useState(project?.content || '');
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
      author_id: user.id,
      id: id
    };
    if (id) {
      newProject.id = id;
    }
    return newProject;
  };

  const handleSaveProject = async e => {
    e && e.preventDefault();
    return await fetchPatchProject(buildNewProject()).then(
      ({ user, project }) => {
        setUser(user);
        setCurrentProject(project);
      }
    );
  };

  const handleSaveAndPublishProject = e => {
    e.preventDefault();
    handleSaveProject(e).then(_ => {
      setCurrentProject();
      setCurrentPage('MyProfile');
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

  useEffect(() => {
    if (!project) {
      fetchPostProject({ author_id: user.id }).then(({ project }) =>
        setCurrentProject(project)
      );
    }
  }, []);

  if (project) {
    return (
      <div className='ProjectEditor'>
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
          <label htmlFor='description'>Description:</label>
          <textarea
            onChange={e => setDescription(e.target.value)}
            className='description-input '
            name='description'
            value={description}
            required
          ></textarea>
        </div>
        <ProjectImagesEditor
          images={images}
          setImages={setImages}
          setCurrentProject={setCurrentProject}
          projectId={id}
        />
        <p>Project Body:</p>
        <TextEditor
          showTools={true}
          HTMLContent={content}
          setContent={setContent}
        />
        {handlePublishButton()}
        <div className='input-container'>
          <button onClick={handleSaveProject}>Save Project</button>
          <button onClick={handleSaveAndPublishProject}>Save and Exit</button>
          <button onClick={handleExit}>Exit Without Saving</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
