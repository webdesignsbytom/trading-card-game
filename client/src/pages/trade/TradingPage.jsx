import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import TradingPageHeader from '../../components/trade/TradingPageHeader';
import { HelmetItem } from '../../components/utils/HelmetItem';
import TradingPageMainContainer from '../../components/trade/TradingPageMainContainer';
// Context
import { TradingContext } from '../../context/TradingContext';
import { CompanyName } from '../../utils/Constants';

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
        PageName={'Trading'}
        desc={`Trading page of ${CompanyName}.`}
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
