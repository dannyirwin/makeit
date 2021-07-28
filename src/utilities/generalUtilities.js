const createdAt2String = (createdAt, includeTime = false) => {
  const str = createdAt?.replace('T', ' ').replace('Z', ' ');
  const date = new Date(str);
  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    weekday: 'long'
  };

  if (date.toString() === 'Invalid Date') {
    return 'July 27, 2021';
  }

  if (includeTime) {
    return date.toUTCString();
  }
  return date.toLocaleDateString('default', options);
};

const buildReduxAction = (type, payload) => {
  return { type, payload };
};

export { createdAt2String, buildReduxAction };
