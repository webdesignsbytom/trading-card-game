import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import {
  CompanyName,
} from '../../utils/Constants';
// Data
import {
  loginPageAdditionalMeta,
  loginPageStructuredData,
} from '../../utils/data/PageData';
import LoginForm from '../../components/forms/LoginForm';

function LoginPage() {
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
      <div className='h-screen overflow-hidden grid'>
        <section className='grid h-full bg-secondary-colour main__bg overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          {/* Main */}
          <main className='bg-white main__bg grid items-center justify-center px-2'>
            <div className='grid justify-center items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <article className='text-center mb-4 mt-1'>
                  <h1 className='text-3xl font-semibold font-fantasy'>
                    Login to your account
                  </h1>
                </article>

                <LoginForm />
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
