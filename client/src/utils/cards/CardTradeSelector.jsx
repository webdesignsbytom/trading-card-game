import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function CardTradeSelector({ handleChange }) {
    const { user } = useContext(UserContext)

  return (
    <>
      <select
        id='id'
        name='id'
        onChange={handleChange}
        className='p-1 rounded w-full'
        required
      >
        <option defaultValue='-'>---</option>

        {user?.cards?.map((card, index) => {
            return (
                <option key={index} value={card.cardId}>{card.name}</option>
            )
        })}
    </select>
    </>
  )
}export default CardTradeSelector