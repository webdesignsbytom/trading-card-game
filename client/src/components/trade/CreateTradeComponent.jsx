import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Card from '../card/Card';
// Data
import CardTradeSelector from '../../utils/cards/CardTradeSelector';
// Images
import TradingImage from '../../assets/images/backgrounds/trading-card-monster-cards-user-trade.png';
import UserTradeComponent from './UserTradeComponent';
import OfferingTradeComponent from './OfferingTradeComponent';

function CreateTradeComponent({
  handleChange,
  tradingPartner,
  selectUserForTrade,
  handleChangeCard,
  notFoundUser,
  searchForUser,
  displayCard,
  userCardToTrade
}) {
  const { user } = useContext(UserContext);

  return (
    <section className='grid lg:grid-cols-rev overflow-hidden'>
      {/* Main container */}
      <section className='bg-red-400 grid grid-rows-2 gap-2 main__bg border-4 border-main-border border-solid rounded-xl overflow-hidden'>
        {/* User container */}
        <UserTradeComponent
          handleChange={handleChange}
          notFoundUser={notFoundUser}
          searchForUser={searchForUser}
          handleChangeCard={handleChangeCard}
          userCardToTrade={userCardToTrade}
        />

        {/* select card to trade */}
        <OfferingTradeComponent displayCard={displayCard} />
      </section>
    </section>
  );
}

export default CreateTradeComponent;
