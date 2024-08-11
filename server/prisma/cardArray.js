export const cardArrayAlpha = [
  {
    serialNumber: 'a-001',
    cardName: 'Common Alpha Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'MONSTER',
    health: 30,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 20,
          description: 'Take 20 less damage for one turn.',
          statName: 'Defend',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 20,
          description: 'A quick strike attack',
          statName: 'Shuffle',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'a-002',
    cardName: 'Uncommon Alpha Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 20,
          description: 'A simple attack of speed.',
          statName: 'Shriek',
          monsterEffectType: 'ATTACK',
        },
        {
          value: 50,
          description: 'A hard strike to the creature.',
          statName: 'Omega Backhand',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'a-003',
    cardName: 'Rare Alpha Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'MONSTER',
    health: 180,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 120,
          description: 'Super attack that hits all enemies on the bench.',
          statName: `Hudo'ken`,
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'a-004',
    cardName: 'Rare holo Alpha Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'MONSTER',
    health: 40,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 10,
          description: 'Get plus 10 health.',
          statName: 'Remidy',
          monsterEffectType: 'HEALTH',
        },
        {
          value: 30,
          description:
            'Spray super sticky cheese on your enemies, so they miss a turn and take 30 damage.',
          statName: 'Cheese spray',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'a-005',
    cardName: 'Mega rare Alpha Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 40,
          description: 'A chop with all the power of a bomb.',
          statName: 'Atomic strike',
          monsterEffectType: 'ATTACK',
        },
        {
          value: 60,
          description:
            'Your monster causes the earth to erupt and crush your enemies.',
          statName: 'Landslode',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'a-006',
    cardName: 'Mega rare holo Alpha Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 30,
          description:
            'A layer of icy armor forms around the monster, providing slight resistance to attacks.',
          statName: 'Frostbite Claw',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 150,
          description:
            'A savage slash imbued with the power of frost, chilling the target and reducing their mobility.',
          statName: 'Ice Ride',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'a-007',
    cardName: 'Common Alpha Item card test 1',
    description:
      'This card has power and magic infused with a hint of saffron. It allows you to control time for a moment.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    backgroundColour: 'WHITE',
    cardStats: {
      create: [
        {
          value: 30,
          description: `Activates a temporal shift, allowing you to skip your opponent’s turn.`,
          statName: 'Time Lock',
          itemEffectType: 'SKIP',
        },
      ],
    },
  },
  {
    serialNumber: 'a-008',
    cardName: 'Uncommon Alpha Item card test 1',
    description:
      'Infused with potent magic, this card enhances your deck control by drawing an extra card.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 60,
          description: `Draws one card from your deck, increasing your strategic options.`,
          statName: 'Mystic Insight',
          itemEffectType: 'DRAW',
        },
      ],
    },
  },
  {
    serialNumber: 'a-009',
    cardName: 'Rare Alpha Item card test 1',
    description:
      'A rare item that reaches into the past, retrieving a key card from your discard pile.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    backgroundColour: 'PURPLE',
    cardStats: {
      create: [
        {
          value: 70,
          description: `Retrieve one card from your discard pile, restoring a key element to your hand.`,
          statName: 'Arcane Recall',
          itemEffectType: 'RETRIEVE',
        },
      ],
    },
  },
  {
    serialNumber: 'a-010',
    cardName: 'Rare holo Alpha Item card test 1',
    description:
      'A holographic item of power, capable of forcing the opponent to discard a valuable card.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    backgroundColour: 'YELLOW',
    cardStats: {
      create: [
        {
          value: 80,
          description: `Forces the opponent to discard one card from their hand, disrupting their strategy.`,
          statName: 'Golden Sacrifice',
          itemEffectType: 'DISCARD',
        },
      ],
    },
  },
  {
    serialNumber: 'a-011',
    cardName: 'Mega rare Alpha Item card test 1',
    description:
      'A card of immense rarity that shuffles your deck, realigning your fate.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    backgroundColour: 'PURPLE',
    cardStats: {
      create: [
        {
          value: 90,
          description: `Shuffles your deck, giving you a fresh chance to draw the right cards.`,
          statName: `Fate’s Reorder`,
          itemEffectType: 'SHUFFLE',
        },
      ],
    },
  },
  {
    serialNumber: 'a-012',
    cardName: 'Mega rare holo Alpha Item card test 1',
    description:
      'This mega rare holographic card uses temporal magic to manipulate the flow of turns.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    backgroundColour: 'BLACK',
    cardStats: {
      create: [
        {
          value: 100,
          description: `Temporarily alters the game’s timeline, allowing you to skip or adjust turns.`,
          statName: 'Chrono Shift',
          itemEffectType: 'TEMPERAL',
        },
      ],
    },
  },
  {
    serialNumber: 'a-013',
    cardName: 'Common Alpha Powerup card test 1',
    description:
      'This card has power and magic infused with a hint of saffron. It grants a temporary health boost.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    backgroundColour: 'BLACK',
    cardStats: {
      create: [
        {
          value: 50,
          description: `Grants a temporary increase in health, fortifying the user against attacks.`,
          statName: 'Saffron Vitality',
          powerUpEffectType: 'HEALTH',
        },
      ],
    },
  },
  {
    serialNumber: 'a-014',
    cardName: 'Uncommon Alpha Powerup card test 1',
    description:
      'This card brims with power and magic, enhancing your strength for a brief period.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 60,
          description: `Increases the user's strength, allowing for more powerful attacks.`,
          statName: 'Mystic Might',
          powerUpEffectType: 'STRENGTH',
        },
      ],
    },
  },
  {
    serialNumber: 'a-015',
    cardName: 'Rare Alpha Powerup card test 1',
    description:
      `A rare card infused with saffron magic, it greatly enhances the user’s defense.`,
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 70,
          description: `Bolsters the user's defense, reducing incoming damage significantly.`,
          statName: 'Arcane Shield',
          powerUpEffectType: 'DEFENCE',
        },
      ],
    },
  },
  {
    serialNumber: 'a-016',
    cardName: 'Rare holo Alpha Powerup card test 1',
    description:
      'This holographic card is charged with magic and saffron essence, capable of healing wounds.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 80,
          description: `Heals a significant amount of the user's health, restoring vitality.`,
          statName: 'Golden Healing',
          powerUpEffectType: 'HEAL',
        },
      ],
    },
  },
  {
    serialNumber: 'a-017',
    cardName: 'Mega rare Alpha Powerup card test 1',
    description:
      'A card of immense power, infused with the magic of saffron, capable of manipulating time itself.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 90,
          description: `Allows the user to manipulate time, gaining a critical advantage in battle.`,
          statName: 'Temporal Shift',
          powerUpEffectType: 'TEMPERAL',
        },
      ],
    },
  },
  {
    serialNumber: 'a-018',
    cardName: 'Mega rare holo Alpha Powerup card test 1',
    description: `This mega rare holographic card grants a powerful boost to strength, fueled by saffron’s magic.`,
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 100,
          description: `Increases the user's strength to its peak, enabling devastating attacks.`,
          statName: 'Omega Force',
          powerUpEffectType: 'STRENGTH',
        },
      ],
    },
  },
  {
    serialNumber: 'a-019',
    cardName: 'Ultimate Alpha Powerup card test 1',
    description:
      'The ultimate powerup card, infused with the highest concentration of saffron magic, providing unparalleled healing.',
    edition: 'first',
    rarity: 'ULTIMATE',
    holographic: true,
    packType: 'ALPHA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 110,
          description: `Restores all health, completely rejuvenating the user.`,
          statName: 'Saffron Rebirth',
          powerUpEffectType: 'HEAL',
        },
      ],
    },
  },
];

export const cardArrayBeta = [
  {
    serialNumber: 'b-001',
    cardName: 'Common Beta Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'BETA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 30,
          description: `The monster’s skin hardens into impenetrable iron, significantly reducing incoming damage.`,
          statName: 'Iron Hide',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 100,
          description: `Bolstered by its newfound resilience, the monster’s attack does as it channels its inner strength.`,
          statName: 'Steel Swipe',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'b-002',
    cardName: 'Uncommon Beta Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'BETA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 50,
          description: `The venom courses through the monster’s veins, hardening its resolve and slightly boosting its defenses.`,
          statName: 'Venomous Strike',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 60,
          description:
            'A quick, precise strike that injects venom, causing lingering damage over time to the target.',
          statName: 'Venomous Spit',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'b-003',
    cardName: 'Rare Beta Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'BETA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 50,
          description:
            'The eerie aura of the shadows saps the vitality of nearby foes, adding a minor attack boost.',
          statName: 'Shadow Veil',
          monsterEffectType: 'ATTACK',
        },
        {
          value: 200,
          description:
            'A fiery explosion that engulfs the target, dealing massive damage and leaving them burned.',
          statName: 'Inferno Blast',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'b-004',
    cardName: 'Rare holo Beta Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'BETA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 40,
          description: `The residual flames bolster the monster’s vitality, healing it slightly after the attack.`,
          statName: 'Inferno Blast',
          monsterEffectType: 'HEALTH',
        },
        {
          value: 70,
          description:
            'A powerful stomp that causes the ground to tremble, damaging all foes and reducing their stability.',
          statName: 'Earthquake Stomp',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'b-005',
    cardName: 'Mega rare Beta Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'BETA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 40,
          description: `The dread invoked by the gaze strengthens the monster’s resolve, increasing its defense.`,
          statName: 'Abyssal Gaze',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 140,
          description: `A terrifying gaze that pierces the soul, weakening the target’s defenses and dealing moderate damage.`,
          statName: 'Abyssal Gaze 2',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'b-006',
    cardName: 'Mega rare holo Beta Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'BETA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 40,
          description: `The spores also bolster the monster’s resistance to poison, slightly boosting its defense.`,
          statName: 'Toxic Spore Cloud',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 100,
          description:
            'The monster releases a cloud of toxic spores, poisoning enemies and causing gradual damage over time.',
          statName: 'Toxic Revenge',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'b-007',
    cardName: 'Common Beta Item card test 1',
    description:
      'This card has power and magic infused with a hint of saffron. It helps you retrieve a card from your discard pile.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'BETA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    backgroundColour: 'WHITE',
    cardStats: {
      create: [
        {
          value: 50,
          description: `Retrieve one card from your discard pile, bringing a lost resource back to your hand.`,
          statName: 'Saffron Recall',
          itemEffectType: 'RETRIEVE',
        },
      ],
    },
  },
  {
    serialNumber: 'b-008',
    cardName: 'Uncommon Beta Item card test 1',
    description:
      'This card, infused with potent magic and a hint of saffron, allows you to shuffle your deck strategically.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'BETA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 60,
          description: `Shuffles your deck, providing you with a new set of options.`,
          statName: 'Mystic Shuffle',
          itemEffectType: 'SHUFFLE',
        },
      ],
    },
  },
  {
    serialNumber: 'b-009',
    cardName: 'Rare Beta Item card test 1',
    description:
      'This rare item card, powered by magic and saffron, forces your opponent to discard a card from their hand.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'BETA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    backgroundColour: 'PURPLE',
    cardStats: {
      create: [
        {
          value: 70,
          description: `Forces your opponent to discard one card from their hand.`,
          statName: 'Arcane Discard',
          itemEffectType: 'DISCARD',
        },
      ],
    },
  },
  {
    serialNumber: 'b-010',
    cardName: 'Rare holo Beta Item card test 1',
    description:
      `A holographic item card that uses magic and saffron to skip the opponent’s turn.`,
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'BETA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
    backgroundColour: 'YELLOW',
    cardStats: {
      create: [
        {
          value: 80,
          description: `Allows you to skip the opponent's turn, giving you a strategic advantage.`,
          statName: 'Golden Stasis',
          itemEffectType: 'SKIP',
        },
      ],
    },
  },
  {
    serialNumber: 'b-011',
    cardName: 'Mega rare Beta Item card test 1',
    description:
      `This mega rare item card has the power to draw an extra card from your deck, infused with saffron’s essence.`,
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'BETA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
    backgroundColour: 'PURPLE',
    cardStats: {
      create: [
        {
          value: 90,
          description: `Draws one additional card from your deck, enhancing your hand.`,
          statName: 'Saffron Draw',
          itemEffectType: 'DRAW',
        },
      ],
    },
  },
  {
    serialNumber: 'b-012',
    cardName: 'Mega rare holo Beta Item card test 1',
    description:
      `A mega rare holographic card that can alter the game’s timeline, powered by saffron’s magic.`,
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'BETA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    backgroundColour: 'BLACK',
    cardStats: {
      create: [
        {
          value: 100,
          description: `Activates a temporal shift, allowing you to manipulate the flow of turns.`,
          statName: 'Temporal Flux',
          itemEffectType: 'TEMPERAL',
        },
      ],
    },
  },
  {
    serialNumber: 'b-013',
    cardName: 'Common Beta Powerup card test 1',
    description:
      'This card has power and magic infused with a hint of saffron. It grants a temporary boost in strength.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
    backgroundColour: 'BLACK',
    cardStats: {
      create: [
        {
          value: 50,
          description: `Increases the user's strength, allowing for more powerful attacks.`,
          statName: 'Saffron Might',
          powerUpEffectType: 'STRENGTH',
        },
      ],
    },
  },
  {
    serialNumber: 'b-014',
    cardName: 'Uncommon Beta Powerup card test 1',
    description:
      'This card, infused with potent magic and a hint of saffron, significantly boosts the user’s defense.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 60,
          description: `Boosts the user's defense, making them more resilient to incoming damage.`,
          statName: 'Mystic Barrier',
          powerUpEffectType: 'DEFENCE',
        },
      ],
    },
  },
  {
    serialNumber: 'b-015',
    cardName: 'Rare Beta Powerup card test 1',
    description:
      'A rare card infused with saffron magic, it enhances the user’s health, making them tougher in battle.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 70,
          description: `Increases the user's health, allowing them to endure more damage.`,
          statName: 'Arcane Fortitude',
          powerUpEffectType: 'HEALTH',
        },
      ],
    },
  },
  {
    serialNumber: 'b-016',
    cardName: 'Rare holo Beta Powerup card test 1',
    description:
      'This holographic card, charged with magic and saffron essence, accelerates the user’s recovery by healing them.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 80,
          description: `Heals a significant portion of the user's health, restoring vitality in the heat of battle.`,
          statName: 'Saffron Restoration',
          powerUpEffectType: 'HEAL',
        },
      ],
    },
  },
  {
    serialNumber: 'b-017',
    cardName: 'Mega rare Beta Powerup card test 1',
    description:
      'This card, of immense power, can manipulate time to give the user a temporal advantage in combat.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 90,
          description: `Grants the user the ability to manipulate time, allowing them to act out of turn.`,
          statName: 'Temporal Distortion',
          powerUpEffectType: 'TEMPERAL',
        },
      ],
    },
  },
  {
    serialNumber: 'b-018',
    cardName: 'Mega rare holo Beta Powerup card test 1',
    description:
      'This mega rare holographic card provides a massive boost to strength, powered by the magic of saffron.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 100,
          description: `Enhances the user's strength to its peak, allowing for unparalleled power in attacks.`,
          statName: 'Omega Strike',
          powerUpEffectType: 'STRENGTH',
        },
      ],
    },
  },
  {
    serialNumber: 'b-019',
    cardName: 'Ultimate Beta Powerup card test 1',
    description:
      'The ultimate powerup card, infused with the highest concentration of saffron magic, greatly enhances the user’s defense.',
    edition: 'first',
    rarity: 'ULTIMATE',
    holographic: true,
    packType: 'BETA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 110,
          description: `Maximizes the user's defense, making them nearly impervious to damage.`,
          statName: 'Saffron Shield',
          powerUpEffectType: 'DEFENCE',
        },
      ],
    },
  },
];

export const cardArrayGamma = [
  {
    serialNumber: 'g-001',
    cardName: 'Common Gamma Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 20,
          description:
            'The impact of the meteor rejuvenates the monster, restoring a portion of its health.',
          statName: 'Meteoric Strike',
          monsterEffectType: 'HEALTH',
        },
        {
          value: 40,
          description:
            'A devastating strike that calls down a meteor from the sky, dealing massive area-of-effect damage.',
          statName: 'Meteoric Strike',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'g-002',
    cardName: 'Uncommon Gamma Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 50,
          description:
            'The monster’s thirst for blood heightens its senses, slightly increasing its defense.',
          statName: 'Bloodthirst',
          monsterEffectType: 'DEFENCE',
        },
        {
          value: 100,
          description:
            'A vicious attack that draws blood, healing the monster for a portion of the damage dealt.',
          statName: 'Bloodthirst',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'g-003',
    cardName: 'Rare Gamma Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 40,
          description:
            'The crystals also reflect some of the damage back at the attacker, providing a minor attack boost.',
          statName: 'Crystalline Barrier',
          monsterEffectType: 'ATTACK',
        },
        {
          value: 200,
          description:
            'A shimmering barrier of crystals forms around the monster, greatly reducing incoming damage.',
          statName: 'Crystalline Barrier',
          monsterEffectType: 'DEFENCE',
        },
      ],
    },
  },
  {
    serialNumber: 'g-004',
    cardName: 'Rare holo Gamma Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 20,
          description:
            'The solar energy invigorates the monster, restoring a small portion of its health.',
          statName: 'Solar Flare',
          monsterEffectType: 'HEALTH',
        },
        {
          value: 30,
          description:
            'A blinding flash of solar energy that scorches enemies and temporarily reduces their accuracy.',
          statName: 'Solar Flare',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'g-005',
    cardName: 'Mega rare Gamma Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 30,
          description:
            'The cool water soothes the monster, slightly increasing its health after the attack.',
          statName: 'Tidal Wave',
          monsterEffectType: 'HEALTH',
        },
        {
          value: 50,
          description:
            'A massive wave of water crashes down on enemies, dealing heavy damage and pushing them back.',
          statName: 'Tidal Wave',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'g-006',
    cardName: 'Mega rare holo Gamma Monster card test 1',
    description: 'This card has power and magic infused with a hint of safron.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'MONSTER',
    health: 80,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 180,
          description:
            'The monster sacrifices itself in a fiery explosion, dealing damage to all foes and rising again with renewed health.',
          statName: 'Phoenix Rebirth',
          monsterEffectType: 'ATTACK',
        },
      ],
    },
  },
  {
    serialNumber: 'g-007',
    cardName: 'Common Gamma Item card test 1',
    description:
      'This card has power and magic infused with a hint of saffron. It offers a subtle advantage by allowing a strategic draw.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    backgroundColour: 'WHITE',
    cardStats: {
      create: [
        {
          value: 50,
          description: `Draws one card from your deck, giving you an extra option.`,
          statName: 'Saffron Draw',
          itemEffectType: 'DRAW',
        },
      ],
    },
  },
  {
    serialNumber: 'g-008',
    cardName: 'Uncommon Gamma Item card test 1',
    description:
      'Infused with a stronger magic, this card disrupts the opponent’s strategy by forcing them to discard.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 60,
          description: `Forces the opponent to discard one card from their hand.`,
          statName: 'Mystic Discard',
          itemEffectType: 'DISCARD',
        },
      ],
    },
  },
  {
    serialNumber: 'g-009',
    cardName: 'Rare Gamma Item card test 1',
    description:
      'A rare item card that brings back a discarded card from your pile, infused with the essence of saffron.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    backgroundColour: 'PURPLE',
    cardStats: {
      create: [
        {
          value: 70,
          description: `Retrieves one card from your discard pile, restoring a key component to your strategy.`,
          statName: 'Arcane Retrieval',
          itemEffectType: 'RETRIEVE',
        },
      ],
    },
  },
  {
    serialNumber: 'g-010',
    cardName: 'Rare holo Gamma Item card test 1',
    description:
      'This holographic card shuffles your deck, offering a fresh start with the power of saffron.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    backgroundColour: 'YELLOW',
    cardStats: {
      create: [
        {
          value: 80,
          description: `Shuffles your deck, potentially altering the course of the game.`,
          statName: 'Golden Shuffle',
          itemEffectType: 'SHUFFLE',
        },
      ],
    },
  },
  {
    serialNumber: 'g-011',
    cardName: 'Mega rare Gamma Item card test 1',
    description:
      'A card of immense rarity that can skip the opponent’s turn, infused with concentrated magic and saffron.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    backgroundColour: 'PURPLE',
    cardStats: {
      create: [
        {
          value: 90,
          description: `Allows you to skip the opponent's turn, giving you a critical advantage.`,
          statName: 'Saffron Skip',
          itemEffectType: 'SKIP',
        },
      ],
    },
  },
  {
    serialNumber: 'g-012',
    cardName: 'Mega rare holo Gamma Item card test 1',
    description:
      'A mega rare holographic card that temporarily alters the game’s timeline, powered by saffron’s brilliance.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'ITEM',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    backgroundColour: 'BLACK',
    cardStats: {
      create: [
        {
          value: 100,
          description: `Activates a temporal shift, allowing you to manipulate the flow of turns.`,
          statName: 'Temporal Twist',
          itemEffectType: 'TEMPERAL',
        },
      ],
    },
  },
  {
    serialNumber: 'g-013',
    cardName: 'Common Gamma Powerup card test 1',
    description:
      'This card has power and magic infused with a hint of saffron. It grants a temporary health boost.',
    edition: 'first',
    rarity: 'COMMON',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    backgroundColour: 'BLACK',
    cardStats: {
      create: [
        {
          value: 50,
          description: `Grants a temporary increase in health, fortifying the user against attacks.`,
          statName: 'Saffron Vitality',
          powerUpEffectType: 'HEALTH',
        },
      ],
    },
  },
  {
    serialNumber: 'g-014',
    cardName: 'Uncommon Gamma Powerup card test 1',
    description:
      'This card, infused with potent magic and a hint of saffron, significantly boosts the user’s strength.',
    edition: 'first',
    rarity: 'UNCOMMON',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 60,
          description: `Enhances the user's strength, enabling them to deal more damage in battle.`,
          statName: 'Mystic Power',
          powerUpEffectType: 'STRENGTH',
        },
      ],
    },
  },
  {
    serialNumber: 'g-015',
    cardName: 'Rare Gamma Powerup card test 1',
    description:
      'A rare item card, infused with saffron, that greatly improves the user’s defense.',
    edition: 'first',
    rarity: 'RARE',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    backgroundColour: 'BLUE',
    cardStats: {
      create: [
        {
          value: 70,
          description: `Increases the user's defense, making them more resilient to incoming damage.`,
          statName: 'Arcane Armor',
          powerUpEffectType: 'DEFENCE',
        },
      ],
    },
  },
  {
    serialNumber: 'g-016',
    cardName: 'Rare holo Gamma Powerup card test 1',
    description:
      'This holographic card, infused with saffron magic, heals the user and restores their vitality.',
    edition: 'first',
    rarity: 'RAREHOLO',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 80,
          description: `Heals a significant portion of the user's health, allowing them to recover quickly.`,
          statName: 'Golden Rejuvenation',
          powerUpEffectType: 'HEAL',
        },
      ],
    },
  },
  {
    serialNumber: 'g-017',
    cardName: 'Mega rare Gamma Powerup card test 1',
    description:
      'This mega rare item card grants the ability to manipulate time, providing a tactical advantage.',
    edition: 'first',
    rarity: 'MEGARARE',
    holographic: false,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    backgroundColour: 'GREEN',
    cardStats: {
      create: [
        {
          value: 90,
          description: `Allows the user to alter the flow of time, gaining a strategic upper hand.`,
          statName: 'Temporal Mastery',
          powerUpEffectType: 'TEMPERAL',
        },
      ],
    },
  },
  {
    serialNumber: 'g-018',
    cardName: 'Mega rare holo Gamma Powerup card test 1',
    description:
      'A mega rare holographic card that greatly boosts strength, powered by saffron’s essence.',
    edition: 'first',
    rarity: 'MEGARAREHOLO',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 100,
          description: `Maximizes the user's strength, enabling overwhelming attacks.`,
          statName: 'Omega Might',
          powerUpEffectType: 'STRENGTH',
        },
      ],
    },
  },
  {
    serialNumber: 'g-019',
    cardName: 'Ultimate Gamma Powerup card test 1',
    description:
      'The ultimate powerup card, infused with saffron’s highest magic, it offers unrivaled healing capabilities.',
    edition: 'first',
    rarity: 'ULTIMATE',
    holographic: true,
    packType: 'GAMMA',
    cardType: 'POWERUP',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    backgroundColour: 'RED',
    cardStats: {
      create: [
        {
          value: 110,
          description: `Completely restores the user's health, ensuring full recovery.`,
          statName: 'Saffron Salvation',
          powerUpEffectType: 'HEAL',
        },
      ],
    },
  },
];

export const users = [
  { email: 'xtombrock1989@gmail.com', username: 'xtombrock', id: 'test' },
  { email: 'testuser@example.com', username: 'testy', id: 'test1' },
  { email: 'testuser3@example.com', username: 'manny' },
  { email: 'testuser4@example.com', username: 'welshy' },
  { email: 'testuser5@example.com', username: 'geolorald' },
  { email: 'testuser6@example.com', username: 'examplenme' },
  { email: 'testuser7@example.com', username: 'trasds' },
  { email: 'testuser8@example.com', username: 'jason1' },
  { email: 'testuser9@example.com', username: 'problemman' },
  { email: 'testuser10@example.com', username: 'revenge1' },
  { email: 'testuser11@example.com', username: 'trever1' },
  { email: 'testuser12@example.com', username: 'outliners' },
  { email: 'testuser130@example.com', username: 'funding55' },
  { email: 'testuser14@example.com', username: 'fouteen' },
  { email: 'testuser15@example.com', username: 'traveller2' },
  { email: 'testuser16@example.com', username: 'crowners' },
  { email: 'testuser17@example.com', username: 'seveteenn5' },
  { email: 'testuser18@example.com', username: 'previous88' },
  { email: 'testuser19@example.com', username: 'tester9' },
  { email: 'testuser20@example.com', username: 'twnty20' },
  { email: 'testuser21@example.com', username: 'twoonetwooonw' },
  {
    email: 'admin@admin.com',
    username: 'adminCraig',
    role: 'ADMIN',
    id: 'admin',
  },
  { email: 'dev@dev.com', username: 'deve', role: 'DEVELOPER', id: 'dev' },
];
