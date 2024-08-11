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
        className='p-1 rounded w-full'
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
