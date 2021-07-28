import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildReduxAction } from '../../utilities/generalUtilities';
import { fetchPatchUser } from '../../utilities/fetchUtilities';

export default function EditUserForm({ setEditMode }) {
  const user = useSelector(store => store.user);
  const [aboutMe, setAboutMe] = useState(user.about_me);
  const [imageUrl, setImageUrl] = useState(user.image_url);

  const dispatch = useDispatch();

  const handleSave = () => {
    const userData = {
      about_me: aboutMe,
      image_url: imageUrl
    };
    fetchPatchUser(userData, user.id).then(({ user }) =>
      dispatch(buildReduxAction('SET_USER', user))
    );
    setEditMode(false);
  };
  return (
    <form className='EditUserForm'>
      <div className='input-container'>
        <label name='aboutMe'>About Me</label>
        <textarea
          value={aboutMe}
          onChange={e => setAboutMe(e.target.value)}
        ></textarea>
      </div>
      <div className='input-container'>
        <label>Profile Picture</label>
        <input
          type='text'
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        ></input>
      </div>
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={() => setEditMode(false)}>Go Back</button>
    </form>
  );
}
