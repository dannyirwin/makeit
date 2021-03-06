// const baseUrl = 'http://localhost:4000/';
const baseUrl = 'https://makeit-backend.herokuapp.com/';
const usersUrl = baseUrl + 'users/';
const projectsUrl = baseUrl + 'projects/';
const followUserUrl = baseUrl + 'follow/';
const followProjectUrl = baseUrl + 'userProjects/';
const commentsUrl = baseUrl + 'comments/';
const imagesUrl = baseUrl + 'images/';

const getToken = () => {
  return window.localStorage.getItem('token');
};

const fetchOptions = (body, method = 'POST') => {
  if (!body) {
    return {
      method: method,
      headers: {
        Authorization: 'Bearer ' + getToken(),
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
  }
  return {
    method: method,
    headers: {
      Authorization: 'Bearer ' + getToken(),
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
};

const fetchCreateUser = async (username, password, aboutMe) => {
  const body = {
    user: {
      username: username,
      password: password,
      about_me: aboutMe
    }
  };
  const response = await fetch(usersUrl, fetchOptions(body)).then(response =>
    response.json()
  );

  window.localStorage.setItem('token', response.token);
  return response.user;
};

const fetchLogin = async (username, password) => {
  const body = {
    user: {
      username: username,
      password: password
    }
  };
  let response = await fetch(baseUrl + 'login/', fetchOptions(body)).then(
    response => response.json()
  );
  window.localStorage.setItem('token', response.token);
  return response.user;
};

const fetchGetProject = async projectId => {
  const response = await fetch(
    projectsUrl + projectId,
    fetchOptions(null, 'GET')
  );
  return response.json();
};

const fetchPostProject = async project => {
  const body = { project: project };
  const response = await fetch(projectsUrl, fetchOptions(body));
  return response.json();
};

const fetchPatchProject = async project => {
  const body = { project: project };
  const response = await fetch(
    projectsUrl + project.id,
    fetchOptions(body, 'PATCH')
  );
  return response.json();
};

const fetchDeleteProject = async projectId => {
  const response = await fetch(
    projectsUrl + projectId,
    fetchOptions(null, 'DELETE')
  );
  return response.json();
};

const fetchSearch = async (searchValue, filterType = 'projects') => {
  if (searchValue) {
    const searchString = '?search=' + searchValue.replace(' ', '+');
    const url = baseUrl + filterType + searchString;
    const response = await fetch(url, fetchOptions(null, 'GET'));
    return await response.json();
  }
};

const fetchFollowUser = async (userToFollowId, userId) => {
  const body = {
    follower_followee: {
      follower_id: userId,
      followee_id: userToFollowId
    }
  };
  const response = await fetch(followUserUrl, fetchOptions(body));
  return response.json();
};

const fetchUnfollowUser = async (userToFollowId, userId) => {
  const body = {
    follower_followee: {
      follower_id: userId,
      followee_id: userToFollowId
    }
  };
  const response = await fetch(followUserUrl, fetchOptions(body, 'DELETE'));
  return response.json();
};

const fetchFollowProject = async (projectId, userId) => {
  const body = {
    user_project: {
      user_id: userId,
      project_id: projectId
    }
  };
  const response = await fetch(followProjectUrl, fetchOptions(body));
  return response.json();
};

const fetchUnfollowProject = async (projectId, userId) => {
  const body = {
    user_project: {
      user_id: userId,
      project_id: projectId
    }
  };
  const response = await fetch(followProjectUrl, fetchOptions(body, 'DELETE'));
  return response.json();
};

const fetchPostComment = async (content, userId, projectId) => {
  const body = {
    comment: {
      user_id: userId,
      project_id: projectId,
      content: content
    }
  };
  const response = await fetch(commentsUrl, fetchOptions(body)).then(res =>
    res.json()
  );
  return response;
};

const fetchDeleteComment = async commentId => {
  const response = await fetch(
    commentsUrl + commentId,
    fetchOptions(null, 'DELETE')
  );
  return response.json();
};

const fetchPostImage = async image => {
  const body = { image: image };
  const response = await fetch(imagesUrl, fetchOptions(body)).then(response =>
    response.json()
  );
  return response;
};
const fetchDeleteImage = async commentId => {
  const response = await fetch(
    imagesUrl + commentId,
    fetchOptions(null, 'DELETE')
  );
  return response.json();
};

const fetchPatchUser = async (data, userId) => {
  const response = await fetch(
    usersUrl + userId,
    fetchOptions(data, 'PATCH')
  ).then(response => response.json());
  return response;
};

const fetchGetUser = async userId => {
  const response = await fetch(
    usersUrl + userId,
    fetchOptions(null, 'GET')
  ).then(response => response.json());
  return response;
};

export {
  fetchCreateUser,
  fetchLogin,
  fetchPostProject,
  fetchPatchProject,
  fetchDeleteProject,
  fetchSearch,
  fetchFollowUser,
  fetchUnfollowUser,
  fetchFollowProject,
  fetchUnfollowProject,
  fetchPostComment,
  fetchDeleteComment,
  fetchGetProject,
  fetchPostImage,
  fetchDeleteImage,
  fetchPatchUser,
  fetchGetUser
};
