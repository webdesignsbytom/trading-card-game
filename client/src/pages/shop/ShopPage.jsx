import React, { useContext, useEffect, useState } from 'react';
// API
import client from '../../utils/client';
// Context
import { UserContext } from '../../context/UserContext';

function ShopPage() {
  const { user } = useContext(UserContext);
  const [purchaseRequest, setPurchaseRequest] = useState({
    numPacks: 1,
    userId: 'f931a3ab-5d4c-4613-8124-64271ea9df71',
    packType: 'BREXIT',
  });

  const buySinglePack = () => {
    console.log('Buy Single Pack');

    client
      .post('/con-cards/buyPacketsOfCards', purchaseRequest, false)
      .then((res) => {
        console.log('res', res.data);
      })

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  return (
    <div className='h-screen bg-red-100 grid items-center justify-center'>
      <button
        onClick={buySinglePack}
        className='rounded outline outline-2 outline-black p-4'
      >
        Buy Pack
      </button>
    </div>
  );
}

export default ShopPage;
