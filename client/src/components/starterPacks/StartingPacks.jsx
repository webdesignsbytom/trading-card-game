import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import client from '../../utils/client';

function StartingPacks() {
  const { user, setUser } = useContext(UserContext);

  const [claimedFreePacks, setClaimedFreePacks] = useState(false);
  const [starterPacks, setStarterPacks] = useState('');

  const claimStarterPacks = () => {
    console.log('CLAIMed');

    let data = { userId: user.id };
    
    client
      .post(`/packs/create-starter-packs-for-user`, data)
      .then((res) => {
        console.log('res', res.data);
        setStarterPacks(res.data.data.packs);
        setUser(res.data.data.updatedUser);
        setClaimedFreePacks(true);
      })
      .catch((err) => {
        console.error('Unable to claim starter packs', err);
      });
  };

  console.log('starterPacks', starterPacks);
  return (
    <div className='grid h-fit'>
      <section className='grid grid-rows-reg'>
        <article className='text-center py-4 text-xl font-semibold'>
          <h3>
            Welcome <span className='italic capitalize font-semibold'>{user.profile.username}</span> to
            the Con Cards trading card game!
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
              CLAIM 3 FREE PACKS
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
