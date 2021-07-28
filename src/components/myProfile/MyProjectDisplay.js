import React from 'react';
import { useDispatch } from 'react-redux';
import { buildReduxAction } from '../../utilities/generalUtilities';
import {
  fetchDeleteProject,
  fetchGetProject
} from '../../utilities/fetchUtilities';

import PublishedStatusIcon from './PublishedStatusIcon';

import '../../css/MyProjects.css';
export default function MyProjectDisplay({ project }) {
  const { id } = project;
  const dispatch = useDispatch();

  const deleteProject = projectId => {
    fetchDeleteProject(projectId).then(({ user }) =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };

  const handleEdit = () => {
    fetchGetProject(project.id).then(response => {
      dispatch(buildReduxAction('SET_CURRENT_PROJECT', project));
      dispatch(buildReduxAction('SET_CURRENT_PAGE', 'ProjectEditor'));
    });
  };

  const handleView = () => {
    fetchGetProject(project.id).then(response => {
      dispatch(buildReduxAction('SET_CURRENT_PROJECT', project));
      dispatch(buildReduxAction('SET_CURRENT_PAGE', 'ViewProject'));
    });
  };

  return (
    <div className='MyProjectsDisplay'>
      <PublishedStatusIcon publishedStatus={project.is_published} />
      <h3>{project.title}</h3>
      {project?.images.length > 0 && (
        <img src={project.images[0].image_url} alt='project preview'></img>
      )}
      <button onClick={handleView}>View</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteProject(id)}>Delete</button>
    </div>
  );
}
