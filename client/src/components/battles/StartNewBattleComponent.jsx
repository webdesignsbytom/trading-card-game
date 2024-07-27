import React, { useState } from 'react';
import client from '../../api/client';

function StartNewBattleComponent() {
  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [battlePartner, setBattlePartner] = useState(false);

  const searchForUser = () => {
    setNotFoundUser(false);

    client
      .get(`/users/user/username/${searchQuery.username}`)
      .then((res) => {
        setBattlePartner(res.data.data.user);
      })
      .catch((err) => {
        console.error('Unable to find User', err);
        if (err.response.statusText === 'Not Found') {
          setNotFoundUser(true);
        }
      });
  };
  const handleChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      username: value,
    });
  };
  return (
    <section className='grid p-4'>
      <section className='grid lg:grid-cols-2x'>
        <section>a</section>
        <section>
          <section className='grid items-center justify-center gap-4 w-full p-1'>
            <section className='mb-2'>
              <div className='text-center'>
                <h2 className='text-xl font-semibold'>Search Users To Fight</h2>
              </div>
            </section>
            <div className='grid h-fit'>
              <div className='text-center flex-wrap'>
                <p>Enter the user name of </p>
                <p className='-mt-2'>who you wish to fight with</p>
              </div>
              <div className='grid items-center justify-center py-1 px-2'>
                <input
                  onChange={handleChange}
                  className='rounded px-1 py-1'
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Search username...'
                  required
                />
              </div>
              {notFoundUser && (
                <section className='px-4 my-2'>
                  <div className='text-center bg-white nav__bg outline outline-4 outline-black rounded p-2'>
                    <p className='text-red-600 font-semibold text-xl'>
                      User Not Found!
                    </p>
                  </div>
                </section>
              )}
              <div className='grid items-center justify-center p-1'>
                <button
                  onClick={searchForUser}
                  className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 = active:scale-95 main__bg no__highlights py-2 px-4 my-2 rounded-xl'
                  type='submit'
                >
                  <span className='text-xl font-semibold uppercase'>Find User</span>
                </button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default StartNewBattleComponent;
