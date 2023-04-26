import './sign-up-form.styles.scss';
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

import { useState } from 'react';

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [user, setUser] = useState(defaultValues);
  const { displayName, email, password, confirmPassword } = user;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const resetDefaultValues = () => {
    setUser(defaultValues);
  };

  const clickHandler = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetDefaultValues();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className='sign-up-form'>
      <div className='sign-up-txt'>
        <h2>Don't have an account?</h2>
        <p>Sign up with your email and password</p>
      </div>

      <div className='sign-up-inputs'>
        <input
          onChange={handleChange}
          placeholder='Display name'
          name='displayName'
          type='text'
          value={displayName}
        />
        <input
          onChange={handleChange}
          placeholder='Email'
          name='email'
          type='email'
          value={email}
        />
        <input
          onChange={handleChange}
          placeholder='Password'
          name='password'
          type='password'
          value={password}
        />
        <input
          onChange={handleChange}
          placeholder='Confirm Password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
        />
      </div>
      <div className='sign-up-buttons'>
        <button onClick={clickHandler}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpForm;
