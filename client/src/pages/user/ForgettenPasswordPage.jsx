import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  forgottenPasswordPageAdditionalMeta,
  forgottenPasswordPageStructuredData,
} from '../../utils/data/PageData';

function ForgettenPasswordPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Reset Password'
        desc={`Reset your password for your ${CompanyName} account.`}
        additionalMeta={forgottenPasswordPageAdditionalMeta}
        structuredData={forgottenPasswordPageStructuredData}
      />

      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden bg-main-background font-poppins'>
        <div className='grid grid-rows-reg bg-secondary-colour main__bg'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <main role='main' className='grid items-center px-2'>
            <div className='grid bg-white gap-4 px-2 py-2 rounded shadow-md'>
              <section className='grid gap-2'>
                <div className='text-center'>
                  <h1 className='font-bold text-xl font-fantasy'>
                    Forgot Your Password?
                  </h1>
                </div>
                <div className='text-left'>
                  <h2>
                    Enter your email address and a new password will be sent
                    you.
                  </h2>
                </div>
              </section>

              {/* Form */}
              <section className='py-2'>
                <ForgotPasswordForm />
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ForgettenPasswordPage;
