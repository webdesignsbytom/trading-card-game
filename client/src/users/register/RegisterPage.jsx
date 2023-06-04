import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import Navbar from '../../components/nav/Navbar';

function RegisterPage() {
  return (
    <div className='bg-red-100 h-screen grid'>
      <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-reg'>
        <Navbar />

        <main className='mb-12 lg:mb-0'>
          <div className='block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12'>
            <div className='flex text-center w-full justify-center mb-4'>
              <h1 className='text-3xl font-semibold'>Sign Up Now</h1>
            </div>
            <RegisterForm />
          </div>
        </main>
      </section>
    </div>
  );
}

export default RegisterPage;
