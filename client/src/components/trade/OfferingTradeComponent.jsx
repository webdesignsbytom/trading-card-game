import React from 'react';
// Components
import CardTradeSelector from '../../utils/cards/CardTradeSelector';
import Card from '../card/Card';

function OfferingTradeComponent({ displayCard }) {
  
  const handleTradeListChange = () => {
    console.log('kkk');
  };

  return (
    <section className='grid h-full w-full overflow-hidden p-2'>
      <div className='bg-white grid grid-rows-reg border-2 border-main-border border-solid p-1 rounded'>
        <div>Create offer</div>
        <div className='grid grid-cols-reg gap-2 bg-red-100'>
          {/* Offered card */}
          <div>
            card
            {/* <Card /> */}
          </div>
          <div className='grid grid-rows-reg'>
            <div>
              <CardTradeSelector handleChange={handleTradeListChange} />
            </div>
            <div>List of cards on offer </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferingTradeComponent;
