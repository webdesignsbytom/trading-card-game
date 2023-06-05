import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import Navbar from '../../components/nav/Navbar';

function RegisterPage() {
  return (
    <div className='bg-red-100 h-screen grid'>
      <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-reg'>
        <Navbar />

        <main className='grid bg-white main__bg h-full items-center justify-center '>
          <section className='bg-white rounded p-4 shadow'>
            <article className='text-center my-2 '>
              <h1 className='text-3xl font-semibold'>Sign Up Now</h1>
            </article>
            <RegisterForm />
          </section>
        </main>
      </section>
    </div>
  );
}

export default RegisterPage;
