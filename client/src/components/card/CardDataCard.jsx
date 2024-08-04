import React from 'react';

function CardDataCard({ cardData }) {
  const cardProperties = [
    { label: 'Card Name', value: cardData.cardName },
    { label: 'Serial Number', value: cardData.serialNumber },
    { label: 'Edition', value: cardData.edition },
    { label: 'Rarity', value: cardData.rarity },
    { label: 'Background Colour', value: cardData.backgroundColour },
    { label: 'Card Type', value: cardData.cardType },
    { label: 'Holographic', value: cardData.holographic ? 'Yes' : 'No' },
    { label: 'Is Available', value: cardData.isAvailable ? 'Yes' : 'No' },
    { label: 'Pack Type', value: cardData.packType },
    { label: 'Description', value: cardData.description },
  ];

  return (
    <article className='grid w-full h-full bg-white rounded-lg border-8 border-main-border border-solid shadow-lg overflow-hidden p-2'>
      <div className='grid grid-rows-reg'>
        <section className='grid gap-1'>
          {cardProperties.map((prop, index) => (
            <div key={index}>
              <strong>{prop.label}:</strong> {prop.value}
            </div>
          ))}
        </section>

        {/* Attacks and stats */}
        <section className='grid mt-4 border-main-border border-2 border-solid rounded p-1'>
          {cardData.cardStats && cardData.cardStats.length > 0 && (
            <div className='grid grid-rows-reg gap-2'>
              <div className='grid h-fit'>
                <strong>Card Stats:</strong>
              </div>
              <div className='pl-2 grid gap-2 h-fit'>
                {cardData.cardStats.map((stat, index) => (
                  <CardStat key={index} stat={stat} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </article>
  );
}

function CardStat({ stat }) {
  return (
    <section className='grid'>
      <div>
        <strong>Card ID:</strong> {stat.statName}
      </div>
      <div>
        <strong>Description:</strong> {stat.description}
      </div>
      {stat.itemEffectType && (
        <div>
          <strong>Item Effect Type:</strong> {stat.itemEffectType}
        </div>
      )}
      {stat.monsterEffectType && (
        <div>
          <strong>Monster Effect Type:</strong> {stat.monsterEffectType}
        </div>
      )}
      {stat.powerUpEffectType && (
        <div>
          <strong>Power Up Effect Type:</strong> {stat.powerUpEffectType}
        </div>
      )}
      <div>
        <strong>Value:</strong> {stat.value}
      </div>
    </section>
  );
}

export default CardDataCard;
