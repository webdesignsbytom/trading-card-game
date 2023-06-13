import React from 'react';

function TestPage() {
  return (
    <div className='grid h-screen bg-slate-200'>
      <main className='grid items-center px-4 grid-rows-2'>
        <section className='grid grid-cols-5 gap-4 w-full'>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full bg-holo-bg bg-repeat bg-center bg-50'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowGradientOne'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowGradientTwo'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full radialGradient'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowsCombined'>
            a
          </div>
        </section>

        <section className='grid grid-cols-5 gap-4 w-full'>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full allGradientsCombined'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full textureAndAllGradientsCombined'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full allWithBackgroundPosition'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full cardShinePlusAfterElement'>
            a
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowGradientOne'>
            a
          </div>
        </section>
      </main>
    </div>
  );
}

export default TestPage;
