# Schema design

- User 
  - Profile - user info
  - Cards - single cards
  - Decks - collection of cards
  - battleRecord - list of battle records
  - loginRecord - list of login record for daily prizes

- Card
  - Pack type - ENUM - aplha beta gamma
  - Card type - ENUM -  monster, item, powerup, 
  - Rarity - ENUM - common - ultimate
  - Number - Int 

- Packs
  - Different cards are from different packs based on random

- Card type
  - Monster card - 1/2 conditions, attack, defemce or health 
  - Item card - 1 condition, stat effect (health + 1), game effect (miss turn),  
  - Powerup card - 1 condition, 2 combo effects - powerup item (give to pet), combo effect when pet has a certain combiation of cards based on type


## Front end

- Card Display Page
  - General Card - outline, border, name, image, rariry, number, container
    - Blank Card
    - Card type - container design stats/attack/item
      - 1,2,3
  - Special Card
    - Custom design per card
    - Blank Card


## Todos

1. Fix daily rewards icon
2. Fix number of card packs to open
3. Go to open battle requests after submitting new battle req
4. Trace that get all cards
