import React from 'react';
import client from '../../utils/client';

function PartyCardEditComponent({ cardData, setSelectedCardData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name);
    console.log('value', value);

    if (name === 'attack' || name === 'health' || 'memberName' || 'cardStat') {
      setSelectedCardData({
        ...cardData,
        partyCard: {
          ...cardData.partyCard,
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
        <h6>Party Card Edit</h6>
      </div>
      <section className='text-sm grid gap-1'>
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
        {/* card rarity */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Card Rarity</label>
            <div>
              <span className='text-xs'>{cardData.rarity}</span>
            </div>
          </div>
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='rarity'
              id='rarity'
              onChange={handleChange}
              placeholder='Card Rarity'
            />
            <button
              onClick={handleSubmitCardValues}
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
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
                <option defaultValue={JSON.stringify(cardData.holographic)}>
                  {JSON.stringify(cardData.holographic)}
                </option>
                <option value={JSON.stringify(!cardData.holographic)}>
                  {JSON.stringify(!cardData.holographic)}
                </option>
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
                <option defaultValue={JSON.stringify(cardData.editable)}>
                  {JSON.stringify(cardData.editable)}
                </option>
                <option value={JSON.stringify(!cardData.editable)}>
                  {JSON.stringify(!cardData.editable)}
                </option>
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
                <option defaultValue={JSON.stringify(cardData.availability)}>
                  {JSON.stringify(cardData.availability)}
                </option>
                <option value={JSON.stringify(!cardData.availability)}>
                  {JSON.stringify(!cardData.availability)}
                </option>
              </select>
            </div>
          </div>
        </section>

        {/* imageUrl */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>ImageUrl</label>
          </div>
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='imageUrl'
              id='imageUrl'
              onChange={handleChange}
              placeholder='ImageUrl'
            />
            <button
              onClick={handleSubmitCardValues}
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
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
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='backgroundColour'
              id='backgroundColour'
              onChange={handleChange}
              placeholder='BackgroundColour'
            />
            <button
              onClick={handleSubmitCardValues}
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
          </div>
        </div>

        {/* name */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Name</label>
            <div>
              <span className='text-xs'>{cardData.partyCard.name}</span>
            </div>
          </div>
          <div className='grid grid-cols-rev w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='name'
              id='name'
              onChange={handleChange}
              placeholder='Name'
            />
            <button
              onClick={handleSubmitCardValues}
              className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
            >
              <span className='font-semibold'>Submit</span>
            </button>
          </div>
        </div>
        {/* powerUp */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>PowerUp</label>
            <div>
              <span className='text-xs'>{cardData.partyCard.powerUp}</span>
            </div>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='powerUp'
              id='powerUp'
              onChange={handleChange}
              placeholder='PowerUp'
            />
          </div>
        </div>
        {/* cardStat */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>CardStat</label>
            <div>
              <span className='text-xs'>{cardData.partyCard.cardStat}</span>
            </div>
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
        {/* effect */}
        <div>
          <div className='grid'>
            <label htmlFor='cardName'>Effect</label>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='text'
              name='effect'
              id='effect'
              onChange={handleChange}
              placeholder='Effect'
            />
          </div>
        </div>
        {/* statMultiplier */}
        <div>
          <div className='grid grid-flow-col justify-between'>
            <label htmlFor='cardName'>Stat Multiplier</label>
            <div>
              <span className='text-xs'>
                {cardData.partyCard.statMultiplier}
              </span>
            </div>
          </div>
          <div className='grid w-full'>
            <input
              className='outline outline-1 outline-black px-1 w-full'
              type='number'
              name='statMultiplier'
              id='statMultiplier'
              onChange={handleChange}
              placeholder='StatMultiplier'
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmitCardValues}
            className='bg-blue-500 px-1 active:scale-95 outline outline-1 outline-black w-fit'
          >
            <span className='font-semibold'>Submit</span>
          </button>
        </div>
      </section>
    </section>
  );
}

export default PartyCardEditComponent;
