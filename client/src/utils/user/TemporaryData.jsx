export const tempUserData = {
    id: "temp-user-id",
    email: "tempuser@example.com",
    password: "hashed-password",
    role: "USER",
    profile: {
      id: "temp-profile-id",
      userId: "temp-user-id",
      username: "tempuser",
      country: "United Kingdom",
      gender: "Other",
      dob: new Date().toISOString(),
      firstName: "Temp",
      lastName: "User",
      profileimageUrl: "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
      isPrivate: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    passwordReset: {
      id: "temp-password-reset-id",
      uniqueString: "uniqueString123",
      expiresAt: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    verifications: {
      id: "temp-verification-id",
      uniqueString: "verificationString123",
      expiresAt: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    cards: [
      {
        id: "temp-card-instance-id",
        name: "Name",
        userId: "temp-user-id",
        cardId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    packs: [
      {
        id: "temp-pack-id",
        packType: "BREXIT",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    deck: [
      {
        id: "temp-deck-id",
        deckName: "Deck Name x",
        maxNumOfCards: 72,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    bank: {
      id: "temp-bank-id",
      funds: 1000.00,
      gems: 25,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    loginRecord: {
      id: "temp-login-record-id",
      lastLoginDateTime: new Date().toISOString(),
      collectedReward: false,
      daysInARow: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdTrades: [
      {
        id: "temp-trade-record-id",
        creatorAgreed: false,
        recieverAgreed: false,
        creatorUsername: "tempuser",
        creatorCardId: 1,
        creatorCardInstanceId: "temp-card-instance-id",
        creatorCardName: "Name xx",
        recieverUsername: "reciever-username-xx",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    receivedTrades: [
      {
        id: "temp-trade-record-id",
        creatorAgreed: false,
        recieverAgreed: false,
        creatorUsername: "tempuser",
        creatorCardId: 1,
        creatorCardInstanceId: "temp-card-instance-id",
        creatorCardName: "Name xx",
        recieverUsername: "reciever-username-xx",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    createdEvents: [
      {
        id: "temp-event-id",
        type: "USER",
        topic: "Test Topic",
        code: 100,
        content: "This is a test event.",
        viewed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    receivedEvents: [
      {
        id: "temp-event-id",
        type: "USER",
        topic: "Test Topic",
        code: 100,
        content: "This is a test event.",
        viewed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    createdBattles: [
      {
        id: "temp-battle-id",
        playerOneUsername: "tempuser",
        playerTwoUsername: "tempuser2",
        playerOneConfirmed: true,
        playerTwoConfirmed: false,
        playerOneDeck: ["card1", "card2"],
        playerTwoDeck: ["card3", "card4"],
        coinFlipResult: "HEADS",
        currentPlayerTurn: "playerOne",
        winnerXP: 10,
        loserXP: 1,
        inProgress: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    receivedBattles: [
      {
        id: "temp-battle-id",
        playerOneUsername: "tempuser",
        playerTwoUsername: "tempuser2",
        playerOneConfirmed: true,
        playerTwoConfirmed: false,
        playerOneDeck: ["card1", "card2"],
        playerTwoDeck: ["card3", "card4"],
        coinFlipResult: "HEADS",
        currentPlayerTurn: "playerOne",
        winnerXP: 10,
        loserXP: 1,
        inProgress: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    battlesWon: 0,
    battlesLost: 0,
    playerXP: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  

export const tempLeaderboardData = [
    {
        username: 'guy',
        wins: 1,
        xp: 1000
    },
    {
        username: 'terry',
        wins: 3,
        xp: 1000
    },
    {
        username: 'derry',
        wins: 6,
        xp: 1000
    },
    {
        username: 'ioni',
        wins: 8,
        xp: 1000
    },
    {
        username: 'cheese',
        wins: 11,
        xp: 1000
    },
    {
        username: 'rey',
        wins: 15,
        xp: 1000
    },
    {
        username: 'tryui8',
        wins: 19,
        xp: 1000
    },
    {
        username: 'muyio',
        wins: 24,
        xp: 1000
    },
    {
        username: 'veryituu7',
        wins: 32,
        xp: 1000
    },
    {
        username: 'xwerty',
        wins: 37,
        xp: 1000
    },
]