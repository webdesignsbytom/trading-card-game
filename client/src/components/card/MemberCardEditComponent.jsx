import React, { useState } from 'react';
import client from '../../utils/client';

function MemberCardEditComponent({ cardData }) {
  const [cardUpdateData, setCardUpdateData] = useState(cardData);
  console.log('memberCardEditComponent', cardData);
  console.log('cardUpdateData', cardUpdateData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name);
    console.log('value', value);

    setCardUpdateData({
        ...cardUpdateData,
        [name]: value
    })
  };

  const handleSubmitCardValues = (event) => {
    event.preventDefault();
    
    console.log('ss');
    client
      .patch(`/con-cards/update-card/${cardData.id}`, cardUpdateData)
      .then((res) => {
        console.log('res', res.data);
        setCardUpdateData(res.data.data.updatedCard)
      })

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  return (
    <section>
      <div>
        <h6>Member Card Edit</h6>
      </div>
      <section>
        {/* card name */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Name</label>
            <div>
              <span className='text-xs'>{cardData.cardName}</span>
            </div>
          </div>
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='cardName'
              id='cardName'
              placeholder='Card Name'
              onChange={handleChange}
            />
            <button
              onClick={handleSubmitCardValues}
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
          </div>
        </div>
        {/* card Serial Number */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Serial Number</label>
            <div>
              <span className='text-xs'>{cardData.serialNumber}</span>
            </div>
          </div>
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='serialNumber'
              id='serialNumber'
              onChange={handleChange}
              placeholder='Card Serial Number'
            />
            <button
              onClick={handleSubmitCardValues}
              name='serialNumber'
              id='serialNumber'
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
          </div>
        </div>
        {/* card edition */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Edition</label>
            <div>
              <span className='text-xs'>{cardData.edition}</span>
            </div>
          </div>
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='edition'
              id='edition'
              onChange={handleChange}
              placeholder='Card edition'
            />
            <button
              onClick={handleSubmitCardValues}
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MemberCardEditComponent;
