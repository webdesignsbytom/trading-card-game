import React, { useContext, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
// API
import client from '../../utils/client';

function TradingPage() {
  const { user } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState({ username: '' });
  console.log('searchQuery', searchQuery);
  const handleChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      username: value,
    });
  };
  const searchForUser = () => {
    client
      .get(`/users/user/username/${searchQuery.username}`)
      .then((res) => {
        console.log(res.data.data.user);
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  };

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid h-full grid-rows-reg'>
          <section className='p-4 '>
            <article>
              <div className='bg-red-500 nav__bg outline outline-4 outline-black rounded p-2'>
                <h1 className='text-3xl font-bold text-center'>Trading</h1>
              </div>
            </article>
          </section>

          <section className='grid grid-cols-2x px-4 mb-4 gap-4'>
            <section className='bg-red-400 main__bg outline outline-4 outline-black rounded-xl p-2'>
              {/* image and search */}
              <div className='grid grid-cols-aa'>
                <div className='top-4 left-4 w-full'>
                  <img
                    className='rounded-xl object-cover'
                    src={user.profile.profileImage}
                    alt='User profile'
                  />
                </div>

                <section className='grid items-center justify-center gap-4 w-full'>
                  <div className='grid  h-fit'>
                    <div className='text-center flex-wrap'>
                      <p>Enter the user name of </p>
                      <p className='-mt-2'>who you wish to trade with</p>
                    </div>
                    <div className='grid items-center justify-center py-1 px-2'>
                      <input
                        onChange={handleChange}
                        className='rounded px-1 py-1'
                        type='text'
                        name='searchUsername'
                        id='searchUsername'
                        placeholder='Search username...'
                        required
                      />
                    </div>
                    <div className='grid items-center justify-center p-1'>
                      <button
                        onClick={searchForUser}
                        className='outline outline-2 outline-black bg-blue-600 main__bg py-2 px-4 my-2 rounded-xl'
                        type='submit'
                      >
                        <span className='text-xl font-semibold'>Find User</span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </section>
            <section className='bg-red-400 main__bg outline outline-4 outline-black rounded-xl p-2'>
              b
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
