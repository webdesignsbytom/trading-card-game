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

  // COMMON Brexit Member
  const commBrexitMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/100-2023', // t = test
      cardName: 'Common Brexit Member card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      backgroundColour: 'BLUE',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // UNCOMMON Brexit Member
  const uncommBrexitMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/101-2023', // t = test
      cardName: 'Uncommon Brexit Member card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // RARE Brexit Member
  const rareBrexitMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/102-2023', // t = test
      cardName: 'Rare Brexit Member card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // RAREHOLO Brexit Member
  const rareHoloBrexitMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/103-2023', // t = test
      cardName: 'Rare holo Brexit Member card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // MEGARARE Brexit Member
  const megaRareBrexitMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/104-2023', // t = test
      cardName: 'Mega rare Brexit Member card test 1',
      edition: 'First',
      rarity: 'MEGARARE',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // MEGARAREHOLO Brexit Member
  const megaRareHoloBrexitMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/105-2023', // t = test
      cardName: 'Mega rare holo Brexit Member card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      backgroundColour: 'RED',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });

  // COMMON Brexit Party
  const commBrexitParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/200-2023', // t = test
      cardName: 'Common Brexit Party card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      backgroundColour: 'WHITE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // UNCOMMON Brexit Party
  const uncommBrexitParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/201-2023', // t = test
      cardName: 'Uncommon Brexit Party card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
      backgroundColour: 'BLUE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // RARE Brexit Party
  const rareBrexitParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/202-2023', // t = test
      cardName: 'Rare Brexit Party card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
      backgroundColour: 'PURPLE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // RAREHOLO Brexit Party
  const rareHoloBrexitParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/203-2023', // t = test
      cardName: 'Rare holo Brexit Party card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
      backgroundColour: 'YELLOW',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // MEGARARE Brexit Party
  const megaRareBrexitParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/204-2023', // t = test
      cardName: 'Mega rare Brexit Party card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
      backgroundColour: 'PURPLE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // MEGARAREHOLO Brexit Party
  const megaRareHoloBrexitParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/205-2023', // t = test
      cardName: 'Mega rare holo Brexit Party card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
      backgroundColour: 'BLACK',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });

  // COMMON Brexit Policy
  const commBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/300-2023', // t = test
      cardName: 'Common Brexit Policy card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
      backgroundColour: 'BLACK',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });
  // UNCOMMON Brexit Policy
  const uncommBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/301-2023', // t = test
      cardName: 'Uncommon Brexit Policy card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
      backgroundColour: 'BLUE',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // RARE Brexit Policy
  const rareBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/302-2023', // t = test
      cardName: 'Rare Brexit Policy card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
      backgroundColour: 'BLUE',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // RAREHOLO Brexit Policy
  const rareHoloBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/303-2023', // t = test
      cardName: 'Rare holo Brexit Policy card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // MEGARARE Brexit Policy
  const megaRareBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/304-2023', // t = test
      cardName: 'Mega rare Brexit Policy card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
      backgroundColour: 'GREEN',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // MEGARAREHOLO Brexit Policy
  const megaRareHoloBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/305-2023', // t = test
      cardName: 'Mega rare holo Brexit Policy card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });

  // ULTIMATE Brexit Policy
  const ultimateBrexitPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/306-2023', // t = test
      cardName: 'Ultimate Brexit Policy card test 1',
      edition: 'First',
      rarity: 'ULTIMATE',
      holographic: true,
      packType: 'BREXIT',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `So rare`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });

  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  // COMMON Election Member
  const commElectionMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/400-2023', // t = test
      cardName: 'Common Election Member card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
      backgroundColour: 'BLUE',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // UNCOMMON Election Member
  const uncommElectionMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/401-2023', // t = test
      cardName: 'Uncommon Election Member card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // RARE Election Member
  const rareElectionMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/402-2023', // t = test
      cardName: 'Rare Election Member card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // RAREHOLO Election Member
  const rareHoloElectionMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/403-2023', // t = test
      cardName: 'Rare holo Election Member card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // MEGARARE Election Member
  const megaRareElectionMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/404-2023', // t = test
      cardName: 'Mega rare Election Member card test 1',
      edition: 'First',
      rarity: 'MEGARARE',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // MEGARAREHOLO Election Member
  const megaRareHoloElectionMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/405-2023', // t = test
      cardName: 'Mega rare holo Election Member card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
      backgroundColour: 'RED',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });

  // COMMON Election Party
  const commElectionParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/500-2023', // t = test
      cardName: 'Common Election Party card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      backgroundColour: 'WHITE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // UNCOMMON Election Party
  const uncommElectionParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/501-2023', // t = test
      cardName: 'Uncommon Election Party card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
      backgroundColour: 'BLUE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // RARE Election Party
  const rareElectionParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/502-2023', // t = test
      cardName: 'Rare Election Party card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
      backgroundColour: 'PURPLE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // RAREHOLO Election Party
  const rareHoloElectionParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/503-2023', // t = test
      cardName: 'Rare holo Election Party card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
      backgroundColour: 'YELLOW',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // MEGARARE Election Party
  const megaRareElectionParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/504-2023', // t = test
      cardName: 'Mega rare Election Party card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
      backgroundColour: 'PURPLE',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // MEGARAREHOLO Election Party
  const megaRareHoloElectionParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/505-2023', // t = test
      cardName: 'Mega rare holo Election Party card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
      backgroundColour: 'BLACK',
      partyCard: {
        create: {
          cardStat: `Voted to send ban protest`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });

  // COMMON Election Policy
  const commElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/600-2023', // t = test
      cardName: 'Common Election Policy card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
      backgroundColour: 'BLACK',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // UNCOMMON Election Policy
  const uncommElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/601-2023', // t = test
      cardName: 'Uncommon Election Policy card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
      backgroundColour: 'BLUE',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // RARE Election Policy
  const rareElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/602-2023', // t = test
      cardName: 'Rare Election Policy card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
      backgroundColour: 'BLUE',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // RAREHOLO Election Policy
  const rareHoloElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/603-2023', // t = test
      cardName: 'Rare holo Election Policy card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // MEGARARE Election Policy
  const megaRareElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/604-2023', // t = test
      cardName: 'Mega rare Election Policy card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
      backgroundColour: 'GREEN',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // MEGARAREHOLO Election Policy
  const megaRareHoloElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/605-2023', // t = test
      cardName: 'Mega rare holo Election Policy card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `Old people ride bus to stay warm`,
          effect: `Lose any attack`,
        },
      },
    },
  });
  // ULTIMATE Election Policy
  const ultimateElectionPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/606-2023', // t = test
      cardName: 'Ultimate Election Policy card test 1',
      edition: 'First',
      rarity: 'ULTIMATE',
      holographic: true,
      packType: 'ELECTION',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `So rare`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });

  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  // COMMON Covid Member
  const commCovidMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/700-2023', // t = test
      cardName: 'Common Covid Member card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'COVID',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
      backgroundColour: 'BLUE',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // UNCOMMON Covid Member
  const uncommCovidMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/701-2023', // t = test
      cardName: 'Uncommon Covid Member card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'COVID',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // RARE Covid Member
  const rareCovidMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/702-2023', // t = test
      cardName: 'Rare Covid Member card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'COVID',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // RAREHOLO Covid Member
  const rareHoloCovidMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/703-2023', // t = test
      cardName: 'Rare holo Covid Member card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'COVID',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // MEGARARE Covid Member
  const megaRareCovidMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/704-2023', // t = test
      cardName: 'Mega rare Covid Member card test 1',
      edition: 'First',
      rarity: 'MEGARARE',
      holographic: false,
      packType: 'COVID',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
      backgroundColour: 'GREEN',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });
  // MEGARAREHOLO Covid Member
  const megaRareHoloCovidMember = await dbClient.card.create({
    data: {
      serialNumber: 't23/705-2023', // t = test
      cardName: 'Mega rare holo Covid Member card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'COVID',
      cardType: 'MEMBER',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
      backgroundColour: 'RED',
      memberCard: {
        create: {
          health: 100,
          attack: 20,
          cardStat: `This mp has never done much`,
        },
      },
    },
  });

  // COMMON Covid Party
  const commCovidParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/800-2023', // t = test
      cardName: 'Common Covid Party card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'COVID',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
      backgroundColour: 'WHITE',
      partyCard: {
        create: {
          cardStat: `Let the fuel price rise 50p while companies make 4x profit on oil`,
          effect: `Plus 100 damage to all regular people`,
        },
      },
    },
  });
  // UNCOMMON Covid Party
  const uncommCovidParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/801-2023', // t = test
      cardName: 'Uncommon Covid Party card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'COVID',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
      backgroundColour: 'BLUE',
      partyCard: {
        create: {
          cardStat: `Let the fuel price rise 50p while companies make 4x profit on oil`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // RARE Covid Party
  const rareCovidParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/802-2023', // t = test
      cardName: 'Rare Covid Party card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'COVID',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
      backgroundColour: 'PURPLE',
      partyCard: {
        create: {
          cardStat: `Let the fuel price rise 50p while companies make 4x profit on oil`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // RAREHOLO Covid Party
  const rareHoloCovidParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/803-2023', // t = test
      cardName: 'Rare holo Covid Party card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'COVID',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
      backgroundColour: 'YELLOW',
      partyCard: {
        create: {
          cardStat: `Let the fuel price rise 50p while companies make 4x profit on oil`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // MEGARARE Covid Party
  const megaRareCovidParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/804-2023', // t = test
      cardName: 'Mega rare Covid Party card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'COVID',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
      backgroundColour: 'PURPLE',
      partyCard: {
        create: {
          cardStat: `Let the fuel price rise 50p while companies make 4x profit on oil`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });
  // MEGARAREHOLO Covid Party
  const megaRareHoloCovidParty = await dbClient.card.create({
    data: {
      serialNumber: 't23/805-2023', // t = test
      cardName: 'Mega rare holo Covid Party card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'COVID',
      cardType: 'PARTY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
      backgroundColour: 'BLACK',
      partyCard: {
        create: {
          cardStat: `Let the fuel price rise 50p while companies make 4x profit on oil`,
          effect: `Plus 50 damage`,
        },
      },
    },
  });

  // COMMON Covid Policy
  const commCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/900-2023', // t = test
      cardName: 'Common Covid Policy card test 1',
      edition: 'First',
      rarity: 'COMMON',
      holographic: false,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
      backgroundColour: 'BLACK',
      policyCard: {
        create: {
          cardStat: `Allow billions in fraud`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });
  // UNCOMMON Covid Policy
  const uncommCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/901-2023', // t = test
      cardName: 'Uncommon Covid Policy card test 1',
      edition: 'First',
      rarity: 'UNCOMMON',
      holographic: false,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
      backgroundColour: 'BLUE',
      policyCard: {
        create: {
          cardStat: `Allow billions in fraud`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });
  // RARE Covid Policy
  const rareCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/902-2023', // t = test
      cardName: 'Rare Covid Policy card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
      backgroundColour: 'BLUE',
      policyCard: {
        create: {
          cardStat: `Allow billions in fraud`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });
  // RAREHOLO Covid Policy
  const rareHoloCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/903-2023', // t = test
      cardName: 'Rare holo Covid Policy card test 1',
      edition: 'First',
      rarity: 'RAREHOLO',
      holographic: true,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `Allow billions in fraud`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });
  // MEGARARE Covid Policy
  const megaRareCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/904-2023', // t = test
      cardName: 'Mega rare Covid Policy card test 1',
      edition: 'First',
      rarity: 'RARE',
      holographic: false,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
      backgroundColour: 'GREEN',
      policyCard: {
        create: {
          cardStat: `Allow billions in fraud`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });
  // MEGARAREHOLO Covid Policy
  const megaRareHoloCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/905-2023', // t = test
      cardName: 'Mega rare holo Covid Policy card test 1',
      edition: 'First',
      rarity: 'MEGARAREHOLO',
      holographic: true,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `Allow billions in fraud`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });

  // ULTIMATE Covid Policy
  const ultimateCovidPolicy = await dbClient.card.create({
    data: {
      serialNumber: 't23/906-2023', // t = test
      cardName: 'Ultimate Covid Policy card test 1',
      edition: 'First',
      rarity: 'ULTIMATE',
      holographic: true,
      packType: 'COVID',
      cardType: 'POLICY',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
      backgroundColour: 'RED',
      policyCard: {
        create: {
          cardStat: `So rare`,
          effect: `Skip 2 turns`,
        },
      },
    },
  });

  const firstInstance = await dbClient.cardInstance.create({
    data: {
      userId: devUser.id,
      cardId: 1
    }
  })

  const secondInstance = await dbClient.cardInstance.create({
    data: {
      userId: devUser.id,
      cardId: 2
    }
  })
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
