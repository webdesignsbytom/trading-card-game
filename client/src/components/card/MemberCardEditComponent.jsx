import React from 'react';
// API
import client from '../../api/client';

function MemberCardEditComponent({ cardData, setSelectedCardData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name);
    console.log('value', value);

    if (name === 'attack' || name === 'health' || 'memberName' || 'cardStat') {
      setSelectedCardData({
        ...cardData,
        memberCard: {
          ...cardData.memberCard,
          [name]: value,
        },
      });
    } else {
      setSelectedCardData({
        ...cardData,
        [name]: value,
      });
    }
  };

  const handleSubmitCardValues = (event) => {
    event.preventDefault();

    client
      .patch(`/con-cards/update-card/${cardData.id}`, cardData)
      .then((res) => {
        console.log('res', res.data);
        setSelectedCardData(res.data.data.updatedCard);
      })

      .catch((err) => {
        console.error('Unable to update card', err);
      });
  };

  return (
    <section>
      <div>
        <h6>Member Card Edit</h6>
      </div>
      <section className='text-sm lg:text-base grid gap-1'>
        {/* card name */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Name</label>
            <div>
              <span className='text-xs'>{cardData.cardName}</span>
            </div>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='cardName'
              id='cardName'
              placeholder='Card Name'
              onChange={handleChange}
            />
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
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='serialNumber'
              id='serialNumber'
              onChange={handleChange}
              placeholder='Card Serial Number'
            />
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
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='edition'
              id='edition'
              onChange={handleChange}
              placeholder='Card edition'
            />
          </div>
        </div>
        {/* card rarity */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Rarity</label>
            <div>
              <span className='text-xs'>{cardData.rarity}</span>
            </div>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='rarity'
              id='rarity'
              onChange={handleChange}
              placeholder='Card Rarity'
            />
          </div>
        </div>
        {/* true flae */}
        <section className='grid grid-cols-3 gap-2'>
          {/* holographic */}
          <div>
            <div className='grid grid-flow-col justify-between'>
              <label htmlFor='cardName'>Holographic</label>
              <div>
                <span className='text-xs'>
                  {JSON.stringify(cardData.holographic)}
                </span>
              </div>
            </div>
            <div className='grid w-full'>
              <select
                id='holographic'
                name='holographic'
                onChange={handleChange}
                className='p-1'
              >
                <option defaultValue='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
          </div>
          {/* editable */}
          <div>
            <div className='grid grid-flow-col justify-between'>
              <label htmlFor='cardName'>Editable</label>
              <div>
                <span className='text-xs'>
                  {JSON.stringify(cardData.editable)}
                </span>
              </div>
            </div>
            <div className='grid w-full'>
              <select
                id='editable'
                name='editable'
                onChange={handleChange}
                className='p-1'
              >
                <option defaultValue='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
          </div>
          {/* availability */}
          <div>
            <div className='grid grid-flow-col justify-between'>
              <label htmlFor='cardName'>Availability</label>
              <div>
                <span className='text-xs'>
                  {JSON.stringify(cardData.availability)}
                </span>
              </div>
            </div>
            <div className='grid w-full'>
              <select
                id='availability'
                name='availability'
                onChange={handleChange}
                className='p-1'
              >
                <option defaultValue='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
          </div>
        </section>

        {/* imageUrl */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>ImageUrl</label>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='imageUrl'
              id='imageUrl'
              onChange={handleChange}
              placeholder='ImageUrl'
            />
          </div>
        </div>
        {/* backgroundColour */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Background Colour</label>
            <div>
              <span className='text-xs'>{cardData.backgroundColour}</span>
            </div>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='backgroundColour'
              id='backgroundColour'
              onChange={handleChange}
              placeholder='BackgroundColour'
            />
          </div>
        </div>

        {/* memberName */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Member Name</label>
            <div>
              <span className='text-xs'>{cardData.memberCard.memberName}</span>
            </div>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='memberName'
              id='memberName'
              onChange={handleChange}
              placeholder='MemberName'
            />
          </div>
        </div>
        <section className='grid grid-flow-col gap-4'>
          {/* health */}
          <div>
            <div className='grid grid-flow-col justify-between'>
              <label htmlFor='cardName'>Health</label>
              <div>
                <span className='text-xs'>{cardData.memberCard.health}</span>
              </div>
            </div>
            <div className='grid w-full'>
              <input
                className='outline outline-1 outline-black px-1 w-full'
                type='number'
                name='health'
                id='health'
                onChange={handleChange}
                placeholder='Health'
              />
            </div>
          </div>
          {/* attack */}
          <div>
            <div className='grid grid-flow-col justify-between'>
              <label htmlFor='cardName'>Attack</label>
              <div>
                <span className='text-xs'>{cardData.memberCard.attack}</span>
              </div>
            </div>
            <div className='grid w-full'>
              <input
                className='outline outline-1 outline-black px-1 w-full'
                type='number'
                name='attack'
                id='attack'
                onChange={handleChange}
                placeholder='Attack'
              />
            </div>
          </div>
        </section>
        {/* cardStat */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Stat</label>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='cardStat'
              id='cardStat'
              onChange={handleChange}
              placeholder='CardStat'
            />
          </div>
        </div>
        <div className='grid items-center justify-center mt-4'>
          <button
            onClick={handleSubmitCardValues}
            className='bg-blue-500 px-1 active:scale-95 hover:bg-blue-700 rounded-xl outline outline-1 outline-black w-fit'
          >
            <span className='font-semibold text-xl px-2 py-1'>Submit</span>
          </button>
        </div>
      </section>
    </section>
  );
}

export default MemberCardEditComponent;
