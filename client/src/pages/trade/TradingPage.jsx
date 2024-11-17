import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import TradingPageHeader from '../../components/trade/TradingPageHeader';
import { HelmetItem } from '../../components/utils/HelmetItem';
import TradingPageMainContainer from '../../components/trade/TradingPageMainContainer';
// Context
import { TradingContext } from '../../context/TradingContext';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { tradingPageAdditionalMeta, tradingPageStructuredData } from '../../utils/data/PageData';

function TradingPage() {
  const {
    toggleOpenTrades,
    openMyTradesComponent,
    setTradingDispayComponent,
  } = useContext(TradingContext);

  useEffect(() => {
    setTimeout(() => {
      setTradingDispayComponent('my_trades');
    }, 1500);
  }, []);

  const goToUpdatedTrade = () => {};

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Trading"
        desc={`Trade your cards in ${CompanyName}'s trading hub. Discover new cards and exchange with other players.`}
        keywords="trading, card trading, MonCards, collectible cards, trade hub"
        additionalMeta={tradingPageAdditionalMeta}
        structuredData={tradingPageStructuredData}
      />

      {/* Page */}
      <div className='bg-secondary-colour main__bg h-screen grid lg:overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>

          {/* Header */}
          <div className='grid grid-rows-reg'>
            <Navbar />

            <TradingPageHeader
              goToUpdatedTrade={goToUpdatedTrade}
              toggleOpenTrades={toggleOpenTrades}
              openMyTradesComponent={openMyTradesComponent}
            />
          </div>

          {/* Main */}
          <TradingPageMainContainer />
        </section>
      </div>
    </>
  );
}

export default TradingPage;
