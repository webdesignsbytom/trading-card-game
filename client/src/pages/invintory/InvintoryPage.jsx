import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InvintoryOptions from '../../components/invintory/InvintoryOptions';

function InvintoryPage() {

  return (
    <div className='grid h-screen grid-cols-reg'>
      <Navbar />
      <main className='grid p-4 grid-rows-reg'>
        <article>
          <div className='bg-slate-400 p-2'>
            <h1 className='text-2xl  font-bold text-center'>Invintory</h1>
          </div>
        </article>

        <section className='p-2'>
          <InvintoryOptions />
        </section>
      </main>
    </div>
  );
}

export default InvintoryPage;
