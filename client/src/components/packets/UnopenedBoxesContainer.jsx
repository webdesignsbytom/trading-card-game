import React, { useContext, useEffect, useState } from 'react';
// Api
import client from '../../api/client';
// Components
import OpenableBoxComponent from './OpenableBoxComponent';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';

function UnopenedBoxesContainer() {
  const { user } = useContext(UserContext);
  const { setReturnedOpenBox } = useContext(CardContext);
  
  const [unopenedBox, setUnopenedBox] = useState([]);
  const [boxIndex, setBoxIndex] = useState([0, 1, 2]);

  useEffect(() => {
    client
      .get(`/users/user/boxes/${user.id}/all-boxes`)
      .then((res) => {
        setUnopenedBox(res.data.data.boxes);
      })
      .catch((err) => {
        console.error('Unable to retrieve all box', err);
      });

      setReturnedOpenBox([])
  }, []);

  const nextBox = () => {
    let current = boxIndex;
    let newArray = [];

    let one = current[0] + 3;
    let two = current[1] + 3;
    let three = current[2] + 3;

    newArray.push(one, two, three);
    setBoxIndex(newArray);
  };

  const prevBox = () => {
    let current = boxIndex;
    let newArray = [];

    if (current[0] === 0) {
      return;
    }

    let one = current[0] - 3;
    let two = current[1] - 3;
    let three = current[2] - 3;

    newArray.push(one, two, three);
    setBoxIndex(newArray);
  };

  return (
    <div className='grid grid-rows-a1a h-full w-full lg:overflow-hidden py-2'>
      <section className='grid h-fit items-center justify-center lg:overflow-hidden'>
        <div className='flex text-center justify-center bg-black main__bg border-solid border-main-border border-4 rounded-xl w-fit px-4 py-1'>
          <h1 className='text-2xl font-fantasy font-semibold text-white'>
            Unopened Boxes
          </h1>
        </div>

        <div className='grid text-center pt-1'>
          <h3 className='text-xl font-semibold'>
            Box left: {unopenedBox?.length}
          </h3>
        </div>
      </section>

      <section className='grid grid-cols-3 w-full h-full items-center justify-center gap-4 px-2 overflow-y-auto lg:overflow-hidden'>
        {unopenedBox[boxIndex[0]] && (
          <OpenableBoxComponent box={unopenedBox[boxIndex[0]]} />
        )}
        {unopenedBox[boxIndex[1]] && (
          <OpenableBoxComponent box={unopenedBox[boxIndex[1]]} />
        )}
        {unopenedBox[boxIndex[2]] && (
          <OpenableBoxComponent box={unopenedBox[boxIndex[2]]} />
        )}
      </section>

      <div className='grid w-full h-fit items-center justify-center'>
        <section className='grid gap-5 mt-6 grid-cols-2 w-fit'>
          <button
            onClick={prevBox}
            className='outline nav__bg bg-main-button text-xl font-semibold font-poppins hover:bg-red-600 active:scale-105 outline-2 outline-black rounded p-2'
          >
            Back
          </button>
          <button
            onClick={nextBox}
            className='outline nav__bg bg-main-button text-xl font-semibold font-poppins hover:bg-red-600 active:scale-105 outline-2 outline-black rounded p-2'
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
}

export default UnopenedBoxesContainer;
