import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import client from '../../api/client';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import CountrySelect from '../../utils/CountrySelect';
import { LOGIN_PAGE_URL, REGISTER_API } from '../../utils/Constants';

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    country: '',
    termsChecked: false,
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    errorMessage: '',
  });

  const [loadingCountry, setLoadingCountry] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setFormData((prevState) => ({
          ...prevState,
          country: data.country_name,
        }));
      } catch (error) {
        console.error('Error fetching country:', error);
      } finally {
        setLoadingCountry(false);
      }
    };

    fetchUserCountry();
  }, []);

  const validateForm = () => {
    const {
      email,
      password,
      confirmPassword,
      username,
      country,
      termsChecked,
    } = formData;
    if (!email || !password || !confirmPassword || !username || !country) {
      setFormStatus({
        ...formStatus,
        errorMessage: 'All fields are required.',
      });
      return false;
    }
    if (password !== confirmPassword) {
      setFormStatus({ ...formStatus, errorMessage: 'Passwords do not match.' });
      return false;
    }
    if (!termsChecked) {
      setFormStatus({
        ...formStatus,
        errorMessage: 'You must agree to the terms and conditions.',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setFormStatus({ ...formStatus, isSubmitting: true, errorMessage: '' });

    try {
      await client.post(REGISTER_API, formData, false);
      setFormStatus({ ...formStatus, isSuccess: true });
      setTimeout(() => navigate(LOGIN_PAGE_URL, { replace: true }), 1000);
    } catch (error) {
      setFormStatus({
        ...formStatus,
        isSubmitting: false,
        errorMessage: 'Registration failed. Please try again.',
      });
      console.error('Unable to register new user', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormStatus({ ...formStatus, errorMessage: '' }); // Clear error message on input change
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, termsChecked: !formData.termsChecked });
  };

  if (loadingCountry) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <LoadingSpinner width={'w-10'} height={'w-10'} />
      </div>
    );
  }

  return (
    <form className='text-center' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <input
          type='text'
          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Username'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <input
        type='email'
        id='email'
        name='email'
        className='form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        placeholder='Email address'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type='password'
        id='password'
        name='password'
        className='form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type='password'
        id='confirmPassword'
        name='confirmPassword'
        className='form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        placeholder='Confirm Password'
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <div className='mb-6'>
        <CountrySelect value={formData.country} handleChange={handleChange} />
      </div>
      <div className='form-check flex justify-center mb-6'>
        <input
          className='form-check-input h-4 w-4 border border-gray-300 rounded-sm transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer'
          type='checkbox'
          id='termsChecked'
          name='termsChecked'
          checked={formData.termsChecked}
          onChange={handleCheckboxChange}
        />
        <label
          className='form-check-label inline-block text-gray-800'
          htmlFor='termsChecked'
        >
          I agree to all terms and conditions.
        </label>
      </div>

      <div>
        <button
          type='submit'
          className='inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? (
            <span className='flex items-center justify-center'>
              <LoadingSpinner width={'w-5'} height={'h-5'} />
            </span>
          ) : formStatus.isSuccess ? (
            'Success!'
          ) : (
            'Sign Up'
          )}
        </button>
      </div>

      {formStatus.errorMessage && (
        <div className='text-center'>
          <span className='text-red-700 font-semibold'>
            {formStatus.errorMessage}
          </span>
        </div>
      )}

      <p className='font-light text-gray-500 dark:text-gray-400'>
        Already a member?{' '}
        <Link
          to={LOGIN_PAGE_URL}
          className='font-medium text-blue-600 hover:underline'
        >
          Login Now
        </Link>
      </p>
      <div className='text-center'>
        <p className='mb-6'>or sign up with:</p>
      </div>
      <div className='flex justify-center my-2'>
        {/* Social media buttons */}
        <SocialMediaButton platform='facebook' />
        <SocialMediaButton platform='google' />
        <SocialMediaButton platform='twitter' />
        <SocialMediaButton platform='github' />
      </div>
    </form>
  );
}

const SocialMediaButton = ({ platform }) => {
  const platformIcons = {
    facebook: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
        className='w-4 h-4 mx-4'
      >
        <path
          fill='currentColor'
          d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
        />
      </svg>
    ),
    google: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 488 512'
        className='w-4 h-4 mx-4'
      >
        <path
          fill='currentColor'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
        />
      </svg>
    ),
    twitter: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        className='w-4 h-4 mx-4'
      >
        <path
          fill='currentColor'
          d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
        />
      </svg>
    ),
    github: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 496 512'
        className='w-4 h-4 mx-4'
      >
        <path
          fill='currentColor'
          d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
        />
      </svg>
    ),
  };

  return (
    <a
      href='#!'
      role='button'
      className='text-blue-600 hover:text-blue-800 focus:text-blue-800 action:text-green-900 transition duration-200 ease-in-out'
    >
      {platformIcons[platform]}
    </a>
  );
};

export default RegisterForm;
