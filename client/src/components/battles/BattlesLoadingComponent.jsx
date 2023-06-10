import React from 'react';
// Utils
import LoadingSpinner from '../utils/LoadingSpinner';

function BattlesLoadingComponent() {
  return (
    <section className='grid grid-rows-reg h-full'>
      <div className='grid my-2 text-center'>
        <h1 className='text-4xl font-bold font-poppins text-white'>Battle is Loading</h1>
      </div>
      <div className='grid h-full overflow-hidden justify-center items-center'>
        <LoadingSpinner width={'w-24'} height={'h-24'} />
      </div>
    </section>
  );
}

export default BattlesLoadingComponent;
