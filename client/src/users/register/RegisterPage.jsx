import React, { useContext, useEffect } from 'react';
// Components
import RegisterForm from '../../components/forms/RegisterForm';
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function RegisterPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/sign-up');
  }, []);

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />

        <main className='grid bg-secondary-colour grid-rows-reg main__bg h-full items-center justify-center'>
          <section className='bg-white rounded p-4 shadow-lg'>
            <article className='text-center my-2'>
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
