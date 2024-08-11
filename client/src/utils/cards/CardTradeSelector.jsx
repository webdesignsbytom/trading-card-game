import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function CardTradeSelector({ handleChange }) {
  const { user } = useContext(UserContext);
  return (
    <>
      <select
        id='trade_card_select'
        name='trade_card_select'
        onChange={handleChange}
        className='form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        required
      >
        <option defaultValue='-'>---</option>

        {user?.cards?.map((card, index) => {
          return (
            <option key={index} value={JSON.stringify(card)}>
              {card.cardName}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default CardTradeSelector;
