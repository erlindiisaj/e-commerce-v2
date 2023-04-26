import './sign-in-form.styles.scss';
import { useState } from 'react';

import {
  signInWithGoogle,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

const defaultValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [user, setUser] = useState(defaultValues);
  const { email, password } = user;

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

  const clickHandler = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  const onSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetDefaultValues();
    } catch (err) {
      alert('incorrect user');
    }
  };

  return (
    <div className='sign-in-form'>
      <div className='sign-in-txt'>
        <h2>Already have an account?</h2>
        <p>Sign in with your email and password</p>
      </div>

      <div className='sign-in-inputs'>
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
      </div>
      <div className='sign-in-buttons'>
        <button onClick={onSignInSubmit}>Sign In</button>
        <button onClick={clickHandler} className='google'>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
