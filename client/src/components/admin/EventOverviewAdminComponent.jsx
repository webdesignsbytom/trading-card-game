import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Api
import client from '../../api/client';
import { deleteEventHandlerApiRequest } from '../../api/DeleteRequests';
// Constants
import { ALL_EVENTS_API, EVENT_OVERVIEW_PAGE_URL } from '../../utils/Constants';

function EventOverviewAdminComponent() {
  const [allEventsArray, setAllEventsArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ id: '' });
  const [foundEvent, setFoundEvent] = useState({});
  const [notFoundEvent, setNotFoundEvent] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    client
      .get(ALL_EVENTS_API)
      .then((res) => {
        setAllEventsArray(res.data.data.events);
      })
      .catch((err) => {
        console.error('Unable to retrieve all events', err);
      });
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      id: value,
    });
  };

  const searchForEvent = () => {
    setNotFoundEvent(false);

    client
      .get(`/events/event/id/${searchQuery.id}`)
      .then((res) => {
        setFoundEvent(res.data.data.event);
      })
      .catch((err) => {
        console.error('Unable to find event', err);
        if (err.response.statusText === 'Not Found') {
          setNotFoundEvent(true);
        }
      });
  };

  const openEventOverview = (event) => {
    navigate(EVENT_OVERVIEW_PAGE_URL, { state: event });
  };

  return (
    <section className='grid h-full overflow-hidden grid-rows-reg px-2 pb-2'>
      <section className='grid grid-flow-col h-fit'>
        <div className='grid justify-start items-center'>
          <h2 className='text-sm lg:text-2xl font-semibold p-2'>
            Events Overview
          </h2>
        </div>
        <div className='grid justify-end items-center'>
          <div className='grid relative items-center justify-center p-1'>
            <input
              className='rounded px-1'
              type='text'
              name='searchEvents'
              id='searchEvents'
              onChange={handleSearchChange}
              placeholder='Search all events...'
            />
            <div
              onClick={searchForEvent}
              className='absolute h-fit w-fit rounded active:scale-95 hover:bg-blue-700 bg-blue-400 px-2 right-0'
            >
              ?
            </div>
          </div>
        </div>
      </section>
      <section className='grid h-full overflow-hidden py-2'>
        <div className='grid h-full overflow-hidden overflow-y-scroll'>
          {allEventsArray?.map((event, index) => {
            return (
              <div
                key={index}
                className='grid grid-cols-rev border-b-2 w-full items-center bg-gray-50 border-black border-solid py-1 px-1 lg:px-2 text-xs lg:text-base'
              >
                <div>
                  <div className='grid'>
                    <span>{event.id}</span>
                  </div>
                  <div>
                    {event.code === 500 && (
                      <h3 className='text-red-600 font-semibold'>
                        <span className='text-black'>Status:</span> {event.code}
                      </h3>
                    )}
                    {(event.code === 400 ||
                      event.code === 401 ||
                      event.code === 404) && (
                      <h3 className='text-orange-600 font-semibold'>
                        <span className='text-black'>Status:</span> {event.code}
                      </h3>
                    )}
                    {(event.code === 200 || event.code === 201) && (
                      <h3 className='text-green-600 font-semibold'>
                        <span className='text-black'>Status:</span> {event.code}
                      </h3>
                    )}
                  </div>
                </div>
                <div className='grid grid-flow-col justify-end px-1 gap-2 w-full'>
                  <span>
                    <button
                      onClick={() => openEventOverview(event)}
                      className='bg-green-500 px-1 text-white font-semibold outline-black outline outline-2 rounded'
                    >
                      View/Edit
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={() =>
                        deleteEventHandlerApiRequest(event, setAllEventsArray)
                      }
                      className='bg-red-700 px-1 text-white font-semibold outline-black outline outline-2 rounded'
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default EventOverviewAdminComponent;
