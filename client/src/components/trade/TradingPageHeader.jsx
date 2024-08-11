import React from 'react';

function TradingPageHeader({
  goToUpdatedTrade,
  toggleOpenTrades,
  openMyTradesComponent,
}) {
  return (
    <section className='grid lg:grid-cols-2 h-fit'>
      <article className='grid h-full items-center'>
        <h1 className='text-center text-6xl font-extrabold text__stroke font-fantasy tracking-wider pt-1'>
          <span className='text-blue-600'>TRADING</span>
        </h1>
      </article>
      <section className='grid h-full w-full items-center justify-end'>
        <div className='grid h-fit bg-nav-colour main__bg font-semibold w-fit border-4 border-main-border border-solid px-4 py-1 rounded-lg grid-flow-col gap-2 lg:gap-4 button_shadow'>
          <div className=''>
            <button
              onClick={toggleOpenTrades}
              className='bg-main-colour hover:bg-blue-800 active:scale-95 no__highlights py-1 px-1 w-full lg:py-1 lg:px-4 rounded-xl border-2 border-main-border border-solid font-poppins button_shadow'
            >
              Open Trades
            </button>
          </div>
          <div>
            <button
              onClick={openMyTradesComponent}
              className='bg-main-colour hover:bg-blue-800 active:scale-95 no__highlights py-1 px-1 w-full lg:py-1 lg:px-4 rounded-xl border-2 border-main-border border-solid font-poppins button_shadow'
            >
              Create Trade
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TradingPageHeader;
