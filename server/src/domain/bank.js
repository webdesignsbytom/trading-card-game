import dbClient from '../utils/dbClient.js';

export const chargePackToBankAccount = (userId, cost) =>
  dbClient.bank.update({
    where: {
      userId: userId,
    },
    data: {
      funds: {
        decrement: cost,
      },
    },
  });
