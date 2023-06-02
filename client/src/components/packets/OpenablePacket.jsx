import React from 'react';

function OpenablePacket() {
  return (
    <div className='w-full grid items-center justify-center'>
      <article>
        <h3>Pack type</h3>
        <div>PACK IMAGE</div>
      </article>

      <section className='w-full'>
        <button className='outline outline-2 outline-black rounded p-2'>
          Open Pack
        </button>
      </section>
    </div>
  );
}

export default OpenablePacket;
