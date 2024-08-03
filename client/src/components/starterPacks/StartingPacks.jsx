import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Constants
import { UNOPENED_PACKS_URL } from '../../utils/Constants';

function StartingPacks() {
  const { user } = useContext(UserContext);

  const [claimedFreePacks, setClaimedFreePacks] = useState(false);
  const [loadingStarterPacks, setLoadingStarterPacks] = useState(false);

  let navigate = useNavigate();

  const claimStarterPacks = () => {
    setLoadingStarterPacks(true);
    navigate(UNOPENED_PACKS_URL);
  };

  return (
    <div className='grid h-fit'>
      <section className='grid grid-rows-reg'>
        <article className='text-center py-4 text-xl font-semibold'>
          <h3>
            Welcome{' '}
            <span className='italic capitalize font-semibold'>
              {user.profile.username}
            </span>{' '}
            to the Mon Cards trading card game!
          </h3>
          <p>
            You can start you collection below by claiming your{' '}
            <span className='italic'>Free</span> <span>Starter Packs!</span>
          </p>
        </article>

        <section className='grid items-center justify-center'>
          {!claimedFreePacks && (
            <button
              onClick={claimStarterPacks}
              className='outline outline-2 my-2 outline-black rounded p-2 bg-red-600 main__bg text-white font-semibold text-xl'
            >
              {loadingStarterPacks && (
                <div className='grid items-center justify-center'>
                  <LoadingSpinner width={'w-6'} height={'h-6'} />
                </div>
              )}
              {!loadingStarterPacks && (
                <div className='grid items-center justify-center'>
                  <span>CLAIM 3 FREE PACKS</span>
                </div>
              )}
            </button>
          )}

          {claimedFreePacks && (
            <div className='outline outline-4 outline-black bg-blue-200 text-center p-4 rounded'>
              <h4 className='text-3xl font-semibold'>Congratulations!</h4>
              <h5>One of each pack type has been added to your invintory</h5>
              <h6>
                Click the unopened packs tab to go straight to opening your
                packs!
              </h6>
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default StartingPacks;
