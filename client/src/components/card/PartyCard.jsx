import React from 'react'

function PartyCard({ cardData }) {
  return (
    <div className='outline outline-1 outline-white text-white rounded-lg p-2'>
        {cardData.cardName}
      </div>
  )
}

export default PartyCard