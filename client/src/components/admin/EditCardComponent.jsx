import React from 'react';
// Components
import Card from '../card/Card';
import MemberCardEditComponent from '../card/MemberCardEditComponent';
import PartyCardEditComponent from '../card/PartyCardEditComponent';
import PolicyCardEditComponent from '../card/PolicyCardEditComponent';

function EditCardComponent({ cardData, setSelectedCardData }) {
  return (
    <section className='grid h-full overflow-hidden p-1'>
      <section className='grid h-full gap-2 md:grid-cols-2 overflow-hidden p-2'>
        <section className='grid outline outline-2 outline-black rounded-xl p-2 bg-white main__bg h-full'>
          {cardData?.cardType === 'MEMBER' && (
            <MemberCardEditComponent cardData={cardData} setSelectedCardData={setSelectedCardData} />
          )}
          {cardData?.cardType === 'PARTY' && (
            <PartyCardEditComponent cardData={cardData} setSelectedCardData={setSelectedCardData} />
          )}
          {cardData?.cardType === 'POLICY' && (
            <PolicyCardEditComponent cardData={cardData} setSelectedCardData={setSelectedCardData} />
          )}
        </section>
        <section className='grid outline outline-2 outline-black rounded-xl p-2 bg-white main__bg h-full overflow-hidden'>
          <div className='p-4 overflow-hidden'>
            <Card cardData={cardData} />
          </div>
        </section>
      </section>
    </section>
  );
}

export default EditCardComponent;
