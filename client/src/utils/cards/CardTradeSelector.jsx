import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function CardTradeSelector({ handleChange }) {
  const { user } = useContext(UserContext);
console.log('user?.cards', user.cards);
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
            <option key={index} value={card.cardName}>
              {card.cardName}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default CardTradeSelector;
