import React, { useContext, useState, useEffect } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Constants
import {
  ACCEPT_BATTLE_REQ_API,
  DELETE_BATTLE_REQ_API,
} from '../../utils/Constants';
// Api
import client from '../../api/client';

function BattlesRequestsComponent() {
  const { user } = useContext(UserContext);

  const [battleRequestsReceived, setBattleRequestsReceived] = useState([]);
  const [battleRequestsSent, setBattleRequestsSent] = useState([]);
  const [confirmedRequests, setConfirmedRequests] = useState([]);

  useEffect(() => {
    setBattleRequestsReceived(user.battleRequestsReceived);
    setBattleRequestsSent(user.battleRequestsSent);
  }, [user.id]);

  const handleAccept = (requestId) => {
    client
      .post(`${ACCEPT_BATTLE_REQ_API}/${requestId}`)
      .then((res) => {
        console.log('ssss', res.data.data.updateRequest);
        setConfirmedRequests(res.data.data.updateRequest);
      })
      .catch((err) => {
        console.error('Error accepting battle request', err);
      });
  };

  const handleDelete = (requestId, isSent) => {
    console.log('requestId', requestId);
    client
      .delete(`${DELETE_BATTLE_REQ_API}/${requestId}`)
      .then((res) => {
        console.log('aaa', res.data.data.deletedBattle);
      })
      .catch((err) => {
        console.error('Error deleting battle request', err);
      });
  };

  const getDaysOld = (date) => {
    const createdAt = new Date(date);
    const now = new Date();
    const differenceInTime = now - createdAt;
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };

  return (
    <section className='grid md:grid-cols-2 p-4'>
      <section className='grid grid-rows-reg h-full w-full'>
        <div className='grid h-fit text-center'>
          <h4 className='text-2xl font-fantasy tracking-wider'>
            Recieved Battle Requests
          </h4>
        </div>
        <section className='grid h-full w-full overflow-hidden'>
          <div className='grid h-fit overflow-y-auto px-4 py-1'>
            {battleRequestsReceived?.map((request) => (
              <article key={request.id} className='grid grid-cols-rev bg-white p-1 outline outline-1 rounded text-sm'>
                <section className='grid grid-flow-col items-center pl-1'>
                  <div>
                    <span>From: {request.senderUsername}</span>
                  </div>
                  <div>
                    <span>Sent {getDaysOld(request.createdAt)} days ago</span>
                  </div>
                </section>
                <section className='grid grid-cols-2 gap-2'>
                  <button
                    onClick={() => handleAccept(request.id)}
                    className='bg-green-500 px-2 py-1 rounded active:scale-95 hover:brightness-105'
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDelete(request.id, true)}
                    className='bg-red-500 px-2 py-1 rounded active:scale-95 hover:brightness-105'
                  >
                    Delete
                  </button>
                </section>
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* Sent requests */}
      <section className='grid grid-rows-reg h-full w-full'>
        <div className='grid h-fit text-center'>
          <h4 className='text-2xl font-fantasy tracking-wider'>
            Sent Battle Requests
          </h4>
        </div>
        <section className='grid h-full w-full overflow-hidden'>
          <div className='grid gap-2 h-fit overflow-y-auto px-4 py-1'>
            {battleRequestsSent?.map((request) => (
              <article key={request.id} className='grid grid-cols-rev bg-white p-1 outline outline-1 rounded text-sm'>
                <section className='grid grid-flow-col items-center pl-1'>
                  <div>
                    <span>To: {request.receiverUsername}</span>
                  </div>
                  <div>
                    <span>Sent {getDaysOld(request.createdAt)} days ago</span>
                  </div>
                </section>
                <button
                  onClick={() => handleDelete(request.id, true)}
                  className='bg-red-500 px-2 py-1 rounded active:scale-95 hover:brightness-105'
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}

export default BattlesRequestsComponent;
