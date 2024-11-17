import React from 'react';
// Components
import RegisterForm from '../../components/forms/RegisterForm';
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { registerPageAdditionalMeta, registerPageStructuredData } from '../../utils/data/PageData';

function RegisterPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Register'
        desc={`Register with ${CompanyName} to access exclusive features.`}
        additionalMeta={registerPageAdditionalMeta}
        structuredData={registerPageStructuredData}
      />

      {/* Page */}
      <div className='bg-black main__bg h-screen grid'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          <main className='grid bg-secondary-colour main__bg h-full items-center justify-center'>
            <section className='bg-white rounded p-4 shadow-lg'>
              <article className='text-center mb-4 mt-1'>
                <h1 className='text-3xl font-semibold font-fantasy'>
                  Sign Up Now
                </h1>
              </article>
              <RegisterForm />
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default RegisterPage;
