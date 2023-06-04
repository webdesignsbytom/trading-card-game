import React, { useContext, useEffect, useState } from 'react';
// Components
import OpenablePacket from './OpenablePacket';
// Context
import { UserContext } from '../../context/UserContext';

function UnopenedPackets() {
  const { user } = useContext(UserContext);
  const [unopenedPacks, setUnopenedPacks] = useState([]);
  const [packIndex, setPackIndex] = useState([0,1,2]);

  useEffect(() => {
    let packs = user.packs;
    console.log('packs', packs);
    let newArray = [];

    packs.forEach((pack) => {
      let newPack = JSON.parse(pack.cards);
      console.log('newPack', newPack);
      pack.cards = newPack
      newArray.push(pack);
    });

    setUnopenedPacks(newArray);
  }, []);

  console.log('unopenedPacks', unopenedPacks);

  return (
    <div className='grid grid-rows-a1a py-6'>
      <div className='flex text-center justify-center'>
        <h4>Unopened Packets</h4>
      </div>

      <section className='w-full grid grid-cols-3 items-center justify-center gap-4 my-4'>
        <OpenablePacket pack={unopenedPacks[packIndex[0]]} />
        <OpenablePacket pack={unopenedPacks[packIndex[1]]} />
        <OpenablePacket pack={unopenedPacks[packIndex[2]]} />
      </section>

      <section className='grid gap-5 mt-6 grid-cols-2'>
        <button className='outline outline-2 outline-black rounded p-2'>
          Back
        </button>
        <button className='outline outline-2 outline-black rounded p-2'>
          Next
        </button>
      </section>
    </div>
  );
}

export default UnopenedPackets;
