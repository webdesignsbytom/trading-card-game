import React, { useContext, useEffect, useState } from 'react';
// Api
import client from '../../api/client';
// Components
import OpenablePacketComponent from './OpenablePacketComponent';
// Context
import { UserContext } from '../../context/UserContext';

function UnopenedPacketsContainer() {
  const { user } = useContext(UserContext);
  const [unopenedPacks, setUnopenedPacks] = useState([]);
  const [packIndex, setPackIndex] = useState([0, 1, 2]);

  useEffect(() => {
    client
      .get(`/users/user/packs/${user.id}/all-packs`)
      .then((res) => {
        setUnopenedPacks(res.data.data.packs);
      })
      .catch((err) => {
        console.error('Unable to retrieve all packs', err);
      });
  }, []);

  const nextPacks = () => {
    let current = packIndex;
    let newArray = [];

    let one = current[0] + 3;
    let two = current[1] + 3;
    let three = current[2] + 3;

    newArray.push(one, two, three);
    setPackIndex(newArray);
  };

  const prevPacks = () => {
    let current = packIndex;
    let newArray = [];

    if (current[0] === 0) {
      return;
    }

    let one = current[0] - 3;
    let two = current[1] - 3;
    let three = current[2] - 3;

    newArray.push(one, two, three);
    setPackIndex(newArray);
  };

  return (
    <div className='grid grid-rows-a1a h-full w-full lg:overflow-hidden py-2'>
      <section className='grid h-fit items-center justify-center lg:overflow-hidden'>
        <div className='flex text-center justify-center bg-black main__bg border-solid border-main-border border-4 rounded-xl w-fit px-4 py-1'>
          <h2 className='text-2xl font-fantasy font-semibold text-white'>
            Unopened Packets
          </h2>
        </div>

        <div className='grid text-center pt-1'>
          <h3 className='text-xl font-semibold'>
            Packs left: {unopenedPacks?.length}
          </h3>
        </div>
      </section>

      <section className='grid grid-cols-3 w-full h-full items-center justify-center gap-4 px-2 overflow-y-auto lg:overflow-hidden'>
        {unopenedPacks[packIndex[0]] && (
          <OpenablePacketComponent pack={unopenedPacks[packIndex[0]]} />
        )}
        {unopenedPacks[packIndex[1]] && (
          <OpenablePacketComponent pack={unopenedPacks[packIndex[1]]} />
        )}
        {unopenedPacks[packIndex[2]] && (
          <OpenablePacketComponent pack={unopenedPacks[packIndex[2]]} />
        )}
      </section>

      <div className='grid w-full h-fit items-center justify-center'>
        <section className='grid gap-5 mt-6 grid-cols-2 w-fit'>
          <button
            onClick={prevPacks}
            className='outline nav__bg bg-main-button text-xl font-semibold font-poppins hover:bg-red-600 active:scale-105 outline-2 outline-black rounded p-2'
          >
            Back
          </button>
          <button
            onClick={nextPacks}
            className='outline nav__bg bg-main-button text-xl font-semibold font-poppins hover:bg-red-600 active:scale-105 outline-2 outline-black rounded p-2'
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
}

export default UnopenedPacketsContainer;
