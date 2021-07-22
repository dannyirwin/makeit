const baseUrl = 'http://localhost:4000/';
const usersUrl = baseUrl + 'users/';
const projectsUrl = baseUrl + 'projects/';

const fetchOptions = (body = '', token = '', method = 'POST') => {
  return {
    method: method,
    headers: {
      Authentication: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
};

const fetchCreateUser = async (username, password) => {
  const body = {
    user: {
      username: username,
      password: password
    }
  };
  const response = await fetch(usersUrl, fetchOptions(body));
  return response.json();
};

const fetchLogin = async (username, password) => {
  const body = {
    user: {
      username: username,
      password: password
    }
  };
  const response = await fetch(baseUrl + 'login/', fetchOptions(body));
  return response.json();
};

const fetchSaveProject = async (project, token) => {
  const body = { project: project };
  const response = await fetch(projectsUrl, fetchOptions(body, token));
  return response;
};

export { fetchCreateUser, fetchLogin, fetchSaveProject };
