import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';
// Data
import {
  cardArrayAlpha,
  cardArrayBeta,
  cardArrayGamma,
  users,
} from './cardArray.js';

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
        bank: {
          create: {
            funds: 1000, // Default value
            gems: 25, // Default value
          },
        },
        loginRecord: {
          create: {
            daysInARow: 1
          }
        }
      },
    });
  };

  for (const user of users) {
    await createUser(user.email, user.username, user.role, user.id);
  }

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

  // let maxNum = 52;
  // for (let i = 1; i < maxNum; i++) {
  //   await dbClient.cardInstance.create({
  //     data: {
  //       userId: 'dev',
  //       cardId: i,
  //     },
  //   });
  // }

  const battleReq1 = await dbClient.battleRequest.create({
    data: {
      senderId: 'test1',         
      senderUsername : 'testy',
      receiverId: 'dev',        
      receiverUsername: 'deve',
    },
  });

  const battleReq2 = await dbClient.battleRequest.create({
    data: {
      receiverId: 'test1',         
      receiverUsername : 'testy',
      senderId: 'dev',        
      senderUsername: 'deve',
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
