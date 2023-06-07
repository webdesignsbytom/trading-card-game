import React, { useContext } from 'react';
// Context
import { UserContext } from '../context/UserContext';

function CardTradeSelector({ handleChange }) {
    const { user } = useContext(UserContext)
  return (
    <>
      <select
        id='tradeCard'
        name='tradeCard'
        onChange={handleChange}
        className=''
        required
      >
        <option defaultValue='-'>---</option>

        {user?.cards?.map((card, index) => {
            return (
                <option key={index} value={card.id}>{card.name}</option>
            )
        })}
    </select>
    </>
  )
}export default CardTradeSelector