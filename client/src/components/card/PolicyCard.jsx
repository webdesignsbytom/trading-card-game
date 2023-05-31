import React from 'react'

function PolicyCard({ cardData }) {
  return (
    <div className='outline outline-1 outline-white text-white rounded-lg p-2'>
        {cardData.cardName}
      </div>
  )
}

export default PolicyCard