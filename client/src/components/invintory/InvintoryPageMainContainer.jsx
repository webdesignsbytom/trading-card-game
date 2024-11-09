import React from 'react';
// Components
import InvintoryHeader from '../../components/invintory/InvintoryHeader';
import InvintoryOptions from '../../components/invintory/InvintoryOptions';

function InvintoryPageMainContainer() {
  return (
    <main className='grid bg-main-colour shadow-internal-main main__bg grid-rows-reg gap-2 p-4 lg:overflow-hidden'>
      {/* Header */}
      <InvintoryHeader />
      {/* Main content */}
      <InvintoryOptions />
    </main>
  );
}

export default InvintoryPageMainContainer;
