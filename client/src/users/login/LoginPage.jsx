import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Api
import client from '../../api/client';
// Components
import Navbar from '../../components/nav/Navbar';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import {
  CompanyName,
  HOME_PAGE_URL,
  LOGIN_API,
  LOGIN_PAGE_URL,
} from '../../utils/Constants';
// Data
import { loginPageAdditionalMeta, loginPageStructuredData } from '../../utils/data/PageData';

function LoginPage() {
  const { setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  const [loginInProgress, setLoginInProgress] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setActiveNav(LOGIN_PAGE_URL);
  }, [setActiveNav]);

  const homePage = () => {
    navigate(HOME_PAGE_URL, { replace: false });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoginInProgress(true);
    setLoginError(false);

    try {
      const res = await client.post(LOGIN_API, loginFormData, false);
      localStorage.setItem(
        process.env.REACT_APP_USER_TOKEN,
        res.data.data.token
      );
      setUser(res.data.data.existingUser);
      homePage();
    } catch (err) {
      setLoginInProgress(false);
      setLoginError(true);
      console.error('Unable to login', err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
    setLoginError(false); // Clear error message on input change
  };

  const handleCheckedRememberMe = () => {
    setLoginFormData({
      ...loginFormData,
      rememberMe: !loginFormData.rememberMe,
    });
  };

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Login'
        desc={`Log in to your ${CompanyName} account to access exclusive features.`}
        additionalMeta={loginPageAdditionalMeta}
        structuredData={loginPageStructuredData}
      />

      {/* Page */}
      <div className='h-screen overflow-hidden grid bg-gray-50 dark:bg-black dark:text-gray-100'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='bg-white main__bg grid items-center justify-center'>
            <div className='grid justify-center items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <article className='text-center mb-4 mt-1'>
                  <h1 className='text-3xl font-semibold font-fantasy'>
                    Login to your account
                  </h1>
                </article>
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
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600'
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
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600'
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          className='form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer'
                          type='checkbox'
                          id='rememberMe'
                          name='rememberMe'
                          checked={loginFormData.rememberMe}
                          onChange={handleCheckedRememberMe}
                        />
                      </div>
                      <div className='ml-3 text-sm'>
                        <label
                          htmlFor='rememberMe'
                          className='text-gray-500 dark:text-gray-300'
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      to='/reset-password'
                      className='text-sm font-medium text-blue-600 hover:underline'
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type='submit'
                    className='w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    {loginInProgress ? (
                      <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                        <LoadingSpinner width={'w-6'} height={'w-6'} />
                      </div>
                    ) : (
                      <div>
                        <span>Sign in</span>
                      </div>
                    )}
                  </button>
                  {loginError && (
                    <div className='text-center'>
                      <span className='text-red-700 font-semibold'>
                        LOGIN FAILED
                      </span>
                    </div>
                  )}
                  <section className='text-center'>
                    <p className='font-light text-gray-500 dark:text-gray-400'>
                      Don’t have an account yet?{' '}
                      <Link
                        to='/sign-up'
                        className='font-medium text-blue-600 hover:underline'
                      >
                        Sign up
                      </Link>
                    </p>
                  </section>
                </form>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
