import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Constants
import { COLLECT_STARTER_PACKS_API, UNOPENED_PACKS_URL } from '../../utils/Constants';

function StartingPacks() {
  const { user, setUser } = useContext(UserContext);

  const [claimedFreePacks, setClaimedFreePacks] = useState(false);
  const [loadingStarterPacks, setLoadingStarterPacks] = useState(false);

  let navigate = useNavigate();

  const claimStarterPacks = () => { 
    client
      .patch(`${COLLECT_STARTER_PACKS_API}/${user.id}`, null)
      .then((res) => {
        setUser(res.data.data.user)
        setLoadingStarterPacks(true);
        navigate(UNOPENED_PACKS_URL);
      })
      .catch((err) => {
        console.error('Unable to claim starter packs', err);
      })     
  };

  return (
    <div className='grid h-fit'>
      <section className='grid grid-rows-reg'>
        <article className='text-center py-4 text-xl font-semibold bg-transparent-white w-fit mx-auto my-2 px-4'>
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
              className='main__bg text-2xl lg:text-5xl bg-transparent-black hover:bg-red-300 shadow-[inset_-1px_18px_35px_22px_#00000024] hover:shadow-[inset_-1px_18px_35px_22px_#00000024] active:scale-95 rounded-xl px-10 py-2 text__stroke tracking-wider'
            >
              {loadingStarterPacks && (
                <div className='grid items-center justify-center'>
                  <LoadingSpinner width={'w-6'} height={'h-6'} />
                </div>
              )}
              {!loadingStarterPacks && (
                <div className='grid items-center justify-center pt-1'>
                  <span className='font-fantasy font-extrabold text-main-colour'>CLAIM <span className='text-red-600'>3</span> FREE PACKS</span>
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
