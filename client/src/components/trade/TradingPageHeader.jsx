import React from 'react';

function TradingPageHeader({
  goToUpdatedTrade,
  toggleOpenTrades,
  toggleOpenCreateTrade,
}) {
  return (
    <section className='grid lg:grid-cols-2 h-fit'>
      <article className='grid h-full items-center'>
        <h1 className='text-center text-6xl font-extrabold text__stroke font-fantasy tracking-wider pt-1'>
          <span className='text-blue-600'>TRADING</span>
        </h1>
      </article>
      <section className='grid h-full w-full items-center justify-end'>
        <div className='grid h-fit bg-nav-colour font-semibold w-fit main__bg border-4 border-main-border border-solid px-4 py-1 rounded-lg grid-flow-col gap-2 lg:gap-4'>
          <div className=''>
            <button
              onClick={goToUpdatedTrade}
              className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-1 px-1 w-full lg:py-2 lg:px-4 rounded-xl border-4 border-main-border border-solid'
            >
              Updates
            </button>
          </div>
          <div className=''>
            <button
              onClick={toggleOpenTrades}
              className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-1 px-1 w-full lg:py-2 lg:px-4 rounded-xl border-4 border-main-border border-solid'
            >
              Open Trades
            </button>
          </div>
          <div>
            <button
              onClick={toggleOpenCreateTrade}
              className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-1 px-1 w-full lg:py-2 lg:px-4 rounded-xl border-4 border-main-border border-solid'
            >
              Create
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TradingPageHeader;
