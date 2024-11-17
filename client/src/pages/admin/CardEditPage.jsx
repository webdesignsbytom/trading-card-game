import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import EditCardComponent from '../../components/admin/EditCardComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';

function CardEditPage() {
  const location = useLocation();
  const [selectedCardData, setSelectedCardData] = useState(location.state);

  // Button data array
  const buttons = [
    { label: 'USERS', ariaLabel: 'Navigate to Users section' },
    { label: 'CARDS', ariaLabel: 'Navigate to Cards section' },
    { label: 'EVENT', ariaLabel: 'Navigate to Events section' },
  ];

  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Admin'} desc={`Admin page of ${CompanyName}.`} />

      <div className='bg-black main__bg h-screen grid overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='grid p-3 overflow-hidden'>
            <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
              <section className='grid grid-cols-reg h-fit'>
                <div className='grid justify-start p-2 items-center text-left'>
                  <h2 className='text-2xl font-semibold'>Card Edit</h2>
                </div>

                <div className='grid justify-end grid-flow-col gap-4 items-center'>
                  {buttons.map((button, index) => (
                    <div key={index}>
                      <button
                        className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'
                        aria-label={button.ariaLabel}
                      >
                        {button.label}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* EDITING */}
              <EditCardComponent
                cardData={selectedCardData}
                setSelectedCardData={setSelectedCardData}
              />
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default CardEditPage;
