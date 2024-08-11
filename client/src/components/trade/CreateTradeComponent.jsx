import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Card from '../card/Card';
// Data
import CardTradeSelector from '../../utils/cards/CardTradeSelector';
// Images
import TradingImage from '../../assets/images/backgrounds/trading_card_monster_cards_user_trade.png';
import UserTradeComponent from './UserTradeComponent';
import OpponentTradeComponent from './OpponentTradeComponent';

function CreateTradeComponent({
  handleChange,
  tradingPartner,
  selectUserForTrade,
  handleChangeCard,
  notFoundUser,
  searchForUser,
  displayCard,
}) {
  const { user } = useContext(UserContext);

  return (
    <section className='grid lg:grid-cols-rev gap-2 overflow-hidden'>
      {/* Main container */}
      <section className='bg-red-400 grid grid-rows-2 gap-2 main__bg border-4 border-main-border border-solid rounded-xl p- overflow-hidden'>
        {/* User container */}
        <UserTradeComponent
          handleChange={handleChange}
          notFoundUser={notFoundUser}
          searchForUser={searchForUser}
          handleChangeCard={handleChangeCard}
        />

        {/* select card to trade */}
        <OpponentTradeComponent displayCard={displayCard} />
      </section>

      {/* Banner section */}
      <section
        className='hiddem lg:grid border-4 border-main-border border-solid rounded-xl p-2 min-w-[300px]'
        style={{
          backgroundImage: `url(${TradingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>
    </section>
  );
}

export default CreateTradeComponent;
