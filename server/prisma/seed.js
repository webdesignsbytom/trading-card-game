import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';
// Data
import {
  cardArrayAlpha,
  cardArrayBeta,
  cardArrayGamma,
  users,
} from './cardArray.js';

const events = [
  {
    type: 'ERROR',
    topic: 'Test event',
    code: 500,
    content: '500 test content',
  },
  { type: 'USER', topic: 'Test event', code: 200, content: '200 test content' },
  {
    type: 'ADMIN',
    topic: 'Test event',
    code: 201,
    content: '201 test content',
  },
  {
    type: 'VISITOR',
    topic: 'Test event',
    code: 201,
    content: '201 test content',
  },
  {
    type: 'DEVELOPER',
    topic: 'Test event',
    code: 201,
    content: '201 test content',
  },
];

async function seed() {
  try {
    // Validate environment variables
    if (!process.env.SEED_PASSWORD || !process.env.SALT_ROUNDS) {
      throw new Error(
        'Environment variables SEED_PASSWORD and SALT_ROUNDS are required'
      );
    }

    // Hash the seed password
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const password = await bcrypt.hash(process.env.SEED_PASSWORD, saltRounds);
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
              daysInARow: 1,
            },
          },
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
        senderUsername: 'testy',
        receiverId: 'dev',
        receiverUsername: 'deve',
      },
    });

    const battleReq2 = await dbClient.battleRequest.create({
      data: {
        receiverId: 'test1',
        receiverUsername: 'testy',
        senderId: 'dev',
        senderUsername: 'deve',
      },
    });

    // Create events
    for (const event of events) {
      await dbClient.event.create({
        data: event,
      });
    }
  } catch (error) {
    console.error('Seeding failed:', error.message);
  } finally {
    await dbClient.$disconnect();
  }
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
