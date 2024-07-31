import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';
// Data
import { cardArrayAlpha, cardArrayBeta, cardArrayGamma, users } from './cardArray.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);
  let idNum = 1;

  const createUser = async (
    email,
    username,
    role = 'USER',
    id = `num ${idNum++}`
  ) => {
    return dbClient.user.create({
      data: {
        email,
        password,
        role,
        id,
        profile: {
          create: {
            username,
          },
        },
      },
    });
  };

  for (const user of users) {
    await createUser(user.email, user.username, user.role, user.id);
  }

  // User items and status
  const devBank = await dbClient.bank.create({
    data: {
      userId: 'dev',
      funds: 1000000,
      gems: 1000,
    },
  });

  const testUserBank = await dbClient.bank.create({
    data: {
      userId: 'test',
      funds: 1000000.67,
      gems: 1000,
    },
  });

  const devLoginRecord = await dbClient.loginRecord.create({
    data: {
      userId: 'dev',
    },
  });

  const userLoginRecord = await dbClient.loginRecord.create({
    data: {
      userId: 'test',
    },
  });

  const createCard = async (card) => {
    const { monsterDetail, itemDetail, powerUpDetail, ...cardData } = card;
    const cardDetails = monsterDetail
      ? { monsterDetail: { create: monsterDetail } }
      : itemDetail
      ? { itemDetail: { create: itemDetail } }
      : powerUpDetail
      ? { powerUpDetail: { create: powerUpDetail } }
      : {};
    return dbClient.card.create({
      data: {
        ...cardData,
        ...cardDetails,
      },
    });
  };

  for (const card of cardArrayAlpha) {
    await createCard(card);
  }
  for (const card of cardArrayBeta) {
    await createCard(card);
  }
  for (const card of cardArrayGamma) {
    await createCard(card);
  }


  // User cards
  const firstInstance = await dbClient.cardInstance.create({
    data: {
      userId: 'dev',
      cardId: 1,
    },
  });

  const secondInstance = await dbClient.cardInstance.create({
    data: {
      userId: 'dev',
      cardId: 2,
    },
  });

  const thirdInstance = await dbClient.cardInstance.create({
    data: {
      userId: 'dev',
      cardId: 3,
    },
  });
  const thirdInstance4 = await dbClient.cardInstance.create({
    data: {
      userId: 'dev',
      cardId: 4,
    },
  });
  const thirdInstance3 = await dbClient.cardInstance.create({
    data: {
      userId: 'dev',
      cardId: 5,
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
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
