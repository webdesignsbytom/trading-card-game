import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: `xtombrock1989@gmail.com`,
      password,
      profile: {
        create: {
          username: `xtombrock`,
        },
      },
    },
  });

  const devUser = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      profile: {
        create: {
          username: `deve`,
        },
      },
    },
  });

  // EVENTS
  const eventOne = await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: 'Test event',
      code: 500,
      content: '500 test content',
    },
  });
  const eventTwo = await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Test event',
      code: 200,
      content: '200 test content',
    },
  });
  const eventThree = await dbClient.event.create({
    data: {
      type: 'ADMIN',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFour = await dbClient.event.create({
    data: {
      type: 'VISITOR',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFive = await dbClient.event.create({
    data: {
      type: 'DEVELOPER',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });

  const memberCardElection = await dbClient.card.create({
    data: {
      cardName: 'Member Test Card Election Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      memberCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card edition `,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const memberCardBrexit = await dbClient.card.create({
    data: {
      cardName: 'Member Test Card Brexit Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      memberCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card edition `,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const memberCardCovid = await dbClient.card.create({
    data: {
      cardName: 'Member Test Card Covid Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'COVID',
      cardType: 'MEMBER',
      memberCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  // Party card
  const partyCardElection = await dbClient.card.create({
    data: {
      cardName: 'Party Test Card Election Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'ELECTION',
      cardType: 'PARTY',
      partyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const partyCardBrexit = await dbClient.card.create({
    data: {
      cardName: 'Party Test Card Brexit Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'BREXIT',
      cardType: 'PARTY',
      partyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const partyCardCovid = await dbClient.card.create({
    data: {
      cardName: 'Party Test Card Covid Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'COVID',
      cardType: 'PARTY',
      partyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  // Policy card
  const policyCardElection = await dbClient.card.create({
    data: {
      cardName: 'Policy Test Card Election Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'ELECTION',
      cardType: 'POLICY',
      policyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const policyCardBrexit = await dbClient.card.create({
    data: {
      cardName: 'Policy Test Card Brexit Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'BREXIT',
      cardType: 'POLICY',
      policyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const policyCardCovid = await dbClient.card.create({
    data: {
      cardName: 'Policy Test Card Covid Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'COVID',
      cardType: 'POLICY',
      policyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const memberCardElection2 = await dbClient.card.create({
    data: {
      cardName: 'Member 2 Test Card Election Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      memberCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const memberCardBrexit2 = await dbClient.card.create({
    data: {
      cardName: 'Member 2 Test Card Brexit Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      memberCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const memberCardCovid2 = await dbClient.card.create({
    data: {
      cardName: 'Member 2 Test Card Covid Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'COVID',
      cardType: 'MEMBER',
      memberCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  // Party card
  const partyCardElection2 = await dbClient.card.create({
    data: {
      cardName: 'Party Test 2 Card Election Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'ELECTION',
      cardType: 'PARTY',
      partyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const partyCardBrexit2 = await dbClient.card.create({
    data: {
      cardName: 'Party Test 2 Card Brexit Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'BREXIT',
      cardType: 'PARTY',
      partyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const partyCardCovid2 = await dbClient.card.create({
    data: {
      cardName: 'Party Test 2 Card Covid Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'COVID',
      cardType: 'PARTY',
      partyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  // Policy card
  const policyCardElection2 = await dbClient.card.create({
    data: {
      cardName: 'Policy Test 2 Card Election Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'ELECTION',
      cardType: 'POLICY',
      policyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const policyCardBrexit2 = await dbClient.card.create({
    data: {
      cardName: 'Policy Test 2 Card Brexit Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'BREXIT',
      cardType: 'POLICY',
      policyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });

  const policyCardCovid2 = await dbClient.card.create({
    data: {
      cardName: 'Policy Test 2 Card Covid Pack',
      edition: 'First',
      rarity: 1,
      holographic: true,
      packType: 'COVID',
      cardType: 'POLICY',
      policyCard: {
        create: {
          serialNumber: '23/100-2023',
          health: 100,
          attack: 20,
          cardStat: `Testing card`,
          image:
            'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/700?cb=20200620223403',
        },
      },
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
