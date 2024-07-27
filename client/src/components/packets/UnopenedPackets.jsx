import React, { useContext, useEffect, useState } from 'react';
// Components
import OpenablePacket from './OpenablePacket';
// Context
import { UserContext } from '../../context/UserContext';
import client from '../../api/client';

function UnopenedPackets() {
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

  console.log('unopenedPacks', unopenedPacks);

  return (
    <div className='grid grid-rows-a1a py-6'>
      <section className='grid items-center justify-center'>
        <div className='flex text-center justify-center bg-black main__bg outline outline-blue-500 outline-4 rounded-xl w-fit px-4 py-1'>
          <h4 className='text-2xl font-semibold text-white'>
            Unopened Packets
          </h4>
        </div>

        <div className='grid text-center mt-4'>
          <h5 className='text-xl font-semibold'>Packs left: {unopenedPacks?.length}</h5>
        </div>
      </section>

      <section className='w-full grid grid-cols-3 items-center justify-center gap-4 my-4 px-2'>
        {unopenedPacks[packIndex[0]] && (
          <OpenablePacket pack={unopenedPacks[packIndex[0]]} />
        )}
        {unopenedPacks[packIndex[1]] && (
          <OpenablePacket pack={unopenedPacks[packIndex[1]]} />
        )}
        {unopenedPacks[packIndex[2]] && (
          <OpenablePacket pack={unopenedPacks[packIndex[2]]} />
        )}
      </section>

      <div className='grid items-center justify-center'>
        <section className='grid gap-5 mt-6 grid-cols-2 w-fit'>
          <button
            onClick={prevPacks}
            className='outline nav__bg bg-red-500 text-xl font-semibold font-poppins hover:bg-red-600 active:scale-105 outline-2 outline-black rounded p-2'
          >
            Back
          </button>
          <button
            onClick={nextPacks}
            className='outline nav__bg bg-red-500 text-xl font-semibold font-poppins hover:bg-red-600 active:scale-105 outline-2 outline-black rounded p-2'
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
}

export default UnopenedPackets;
