import React, { useContext, useState, useEffect } from 'react';
// Context
import { CardContext } from '../../context/CardContext';
import { UserContext } from '../../context/UserContext';
// Components
import Card2 from '../card/Card2';
import EmptyCardSlot from '../card/EmptyCardSlot';
// Api
import client from '../../api/client';

function OpenedBoxDisplayComponent() {
  const { returnedOpenBox } = useContext(CardContext);
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  
  console.log('returnedOpenBox xxxxx', returnedOpenBox);

  useEffect(() => {
    if (returnedOpenBox.length > 0) {
      setLoading(false);
    }

    // client
    //   .delete(`/us${user.id}`)
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.error('Unable to delete user', err);
    //   });
  }, [returnedOpenBox]);

  const emptyArray = Array(128).fill(0);

  return (
    <div className='grid h-full grid-rows-reg overflow-hidden'>
      <article className='h-fit text-center'>
        <h1 className='text-3xl font-semibold font-fantasy'>
          CHECK OUT YOUR NEW CARDS!
        </h1>
        <h2 className='text-lg font-semibold'>
          They have been automatically added to your album
        </h2>
      </article>

      {/* Return the box of new cards  */}
      <div className='grid overflow-y-auto h-full items-center'>
        <section className='grid h-fit my-auto md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-6 gap-3 py-4 px-2 overflow-y-auto'>
          {loading
            ? emptyArray.map((_, index) => <EmptyCardSlot key={index} />)
            : returnedOpenBox.map((card, index) => (
                <Card2 cardData={card} key={index} />
              ))}
        </section>
      </div>
    </div>
  );
}

export default OpenedBoxDisplayComponent;
