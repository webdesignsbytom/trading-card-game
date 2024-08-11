import React from 'react';
import Card from '../card/Card';

function RewardCollectedModal({ closeCollectReward, cardData, rewardDataType }) {
  return (
    <section className='absolute grid overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4'>
      <div className='grid bg-red-600 main__bg outline outline-4 outline-black rounded-xl overflow-hidden'>
        <div className='grid'>
          <div className='text-center'>
            <h2 className='text-xl font-semibold my-2'>REWARD</h2>
          </div>
          <div className='grid w-full mx-auto items-center justify-center p-2'>
            <div className='grid items-center justify-center mx-auto w-1/2'>
              {rewardDataType === 'card' && <Card cardData={cardData} />}
            </div>
          </div>
          <div className='grid text-center items-center justify-center capitalize'>
            {/* <p className='flex text-center'>
            <span>Reward:</span>
            <span className='capitalize'>{rewardDataType}</span>
            <span>{rewardDataType.cardName}</span>
          </p> */}
          </div>
        </div>

        <div className='grid items-center justify-center mb-2'>
          <button
            className='outline outline-2 my-2 outline-black rounded p-2 bg-blue-700 hover:bg-blue-500 active:scale-95 main__bg text-white font-semibold text-xl'
            onClick={closeCollectReward}
            aria-label='Close reward modal'
          >
            CLOSE
          </button>
        </div>
      </div>
    </section>
  );
}

export default RewardCollectedModal;
