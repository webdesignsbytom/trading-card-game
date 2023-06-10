import React, { useState } from 'react';

function BattleFightComponent() {
  const [currentBattle, setCurrentBattle] = useState({
    playerOneUserName: 'deve',
    playerTwoUserName: 'admin',
  });
  const [cardInPlay, setCardInPlay] = useState({ id: 1 });
  const [enemyCardInPlay, setEnemyCardInPlay] = useState({ id: 4 });
  const [playerCardsInHand, setPlayerCardsInHand] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
  ]);

  return (
    <section className='grid h-full bg-white main__bg outline outline-blue-700 grid-rows-reg outline-4 rounded-xl'>
      <section className='grid'>
        <div className='text-center mt-2'>
          <h1 className='text-2xl'>BattleFightComponent</h1>
        </div>
      </section>
      <section className='grid lg:grid-cols-2x px-2 gap-2 my-2'>
        <section className='grid grid-rows-reg bg-blue-500 main__bg outline outline-2 outline-black p-1 rounded-xl'>
          <div className='grid h-fit'>
            <article className='grid grid-flow-col justify-between'>
              <div>{currentBattle.playerOneUserName}</div>
              <div>Cards Left In Deck 73</div>
            </article>
          </div>

          <div className='grid bg-red-300'>
            <section className='grid w-full grid-cols-2 gap-1 mt-1 mb-2 px-1'>
              <div className='grid bg-blue-500 main__bg outline outline-2 outline-black p-[1px] rounded'>
                <span>{cardInPlay.id}</span>
              </div>
              <div className='grid bg-blue-500 main__bg outline outline-2 outline-black p-[1px] rounded'>
                <span>{enemyCardInPlay.id}</span>
              </div>
            </section>

            <section className='grid grid-cols-6 gap-1'>
              {playerCardsInHand.map((card, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setCardInPlay(card)}
                    className='grid cursor-pointer hover:scale-110 active:scale-95 bg-blue-500 main__bg outline outline-2 outline-black p-[1px] rounded'
                  >
                    <span>{card.id}</span>
                  </div>
                );
              })}
            </section>
          </div>
        </section>
        <section className='grid bg-red-500 main__bg outline outline-2 outline-black p-1 rounded-xl'>
          <article>{currentBattle.playerTwoUserName}</article>
        </section>
      </section>
    </section>
  );
}

export default BattleFightComponent;
