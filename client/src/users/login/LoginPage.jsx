import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// API
import client from '../../utils/client';

function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const homePage = () => {
    navigate('/', { replace: true });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('login');
    console.log('data', loginFormData);

    client
      .post('/login', loginFormData, false)
      .then((res) => {
        console.log('res', res.data);
        console.log('res.data.data.token', res.data.data.token);
        localStorage.setItem(
          process.env.REACT_APP_USER_TOKEN,
          res.data.data.token
        );
        setUser(res.data.data.existingUser);
      })
      .then(() => homePage())

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <div className='h-screen bg-slate-200 grid justify-center items-center'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Sign in to your account
          </h1>
          <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-main-colour focus:border-main-colour block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-colour dark:focus:border-main-colour'
                placeholder='name@email.com'
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-main-colour focus:border-main-colour block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-colour dark:focus:border-main-colour'
                required
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-main-colour checked:border-main-colour focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='rememberMe'
                    name='rememberMe'
                    checked
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label
                    htmlFor='remember'
                    className='text-gray-500 dark:text-gray-300'
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to='/reset-password'
                className='text-sm font-medium text-main-colour hover:underline'
              >
                Forgot password?
              </Link>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-main-colour hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-main-colour dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Sign in
            </button>
            <p className='font-light text-gray-500 dark:text-gray-400'>
              Don’t have an account yet?{' '}
              <Link
                to='/sign-up'
                className='font-medium text-main-colour hover:underline'
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
