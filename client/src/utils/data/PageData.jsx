import {
  CompanyName,
  CompanyPhoneNumber,
  FACEBOOK_BUSINESS_URL,
  FULL_BUSINESS_URL,
  INSTAGRAM_BUSINESS_URL,
  LINKEDIN_BUSINESS_URL,
} from '../Constants';

// Home page
export const monCardsHomePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: CompanyName,
  url: FULL_BUSINESS_URL,
  description: `${CompanyName} is an exciting trading card game with unique battles and collectible monsters.`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${FULL_BUSINESS_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    FACEBOOK_BUSINESS_URL,
    INSTAGRAM_BUSINESS_URL,
    LINKEDIN_BUSINESS_URL,
  ],
  mainEntity: {
    '@type': 'Game',
    name: 'MonCards Trading Card Game',
    description: 'Collect cards, battle monsters, and challenge your friends!',
    gamePlatform: ['Web', 'Mobile'],
    applicationCategory: 'Game',
    genre: ['Trading Card Game', 'Strategy'],
    image: `${FULL_BUSINESS_URL}/assets/images/home-preview.jpg`,
    publisher: {
      '@type': 'Organization',
      name: CompanyName,
      url: FULL_BUSINESS_URL,
    },
  },
};
export const monCardsHomePageAdditionalMeta = [
  { property: 'og:title', content: `Welcome to ${CompanyName}` },
  {
    property: 'og:description',
    content: `Discover the world of MonCards, a trading card game filled with exciting battles and unique collectible monsters.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/home-preview.jpg`,
  },
  { property: 'og:url', content: FULL_BUSINESS_URL },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Welcome to ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Experience the thrill of collecting cards and battling in MonCards, the ultimate trading card game.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/home-preview.jpg`,
  },
];

// Forgot password
export const forgottenPasswordPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Reset Password',
  description: `Reset your password for your ${CompanyName} account.`,
  url: `${FULL_BUSINESS_URL}/forgotten-password`,
};

export const forgottenPasswordPageAdditionalMeta = [
  { property: 'og:title', content: `Reset Your Password - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Securely reset your ${CompanyName} account password.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/reset-password-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/forgotten-password` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Reset Your Password - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Follow the steps to securely reset your ${CompanyName} account password.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/reset-password-preview.jpg`,
  },
];

// Login
export const loginPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Login',
  description: `Log in to your ${CompanyName} account to access exclusive features.`,
  url: `${FULL_BUSINESS_URL}/login`,
};

export const loginPageAdditionalMeta = [
  { property: 'og:title', content: `Login - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Access your ${CompanyName} account to explore exclusive features and services.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/login-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/login` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Login - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Sign in to your ${CompanyName} account and unlock access to premium features.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/login-preview.jpg`,
  },
];

// Register
export const registerPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Register',
  description: `Create an account with ${CompanyName} to access exclusive features and services.`,
  url: `${FULL_BUSINESS_URL}/register`,
};

export const registerPageAdditionalMeta = [
  { property: 'og:title', content: `Register - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Sign up for a ${CompanyName} account to enjoy exclusive features and personalized services.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/register-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/register` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Register - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Join ${CompanyName} today and unlock access to premium features.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/register-preview.jpg`,
  },
];

// Maintenance
export const maintenancePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Maintenance Page',
  description: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back soon!`,
  url: `${FULL_BUSINESS_URL}/maintenance`,
};

export const maintenancePageAdditionalMeta = [
  { property: 'og:title', content: `We'll Be Back Soon - ${CompanyName}` },
  {
    property: 'og:description',
    content: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back shortly with exciting updates.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/maintenance-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/maintenance` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `We'll Be Back Soon - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back shortly with exciting updates.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/maintenance-preview.jpg`,
  },
];

// Policies page
export const termsAndPoliciesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms and Policies',
  description: `Explore the terms of service and privacy policies of ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/terms-and-policies`,
  mainEntity: {
    '@type': 'FAQPage',
    name: 'Terms and Policies FAQ',
    description: `Frequently asked questions about terms of service, privacy policies, and compliance at ${CompanyName}.`,
  },
};

export const termsAndPoliciesAdditionalMeta = [
  { property: 'og:title', content: `Terms and Policies - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Understand the terms of service, privacy policies, and compliance guidelines of ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/terms-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/terms-and-policies` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Terms and Policies - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Learn more about our terms of service, privacy policies, and compliance at ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/terms-preview.jpg`,
  },
];

// Error page
export const errorPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '404 Error Page',
  description: `The requested page could not be found on ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/404`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${FULL_BUSINESS_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const errorPageAdditionalMeta = [
  { property: 'og:title', content: 'Page Not Found - 404' },
  {
    property: 'og:description',
    content: `Oops! The page you’re looking for isn’t here. Visit ${CompanyName} to find what you need.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/404-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/404` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Page Not Found - 404' },
  {
    name: 'twitter:description',
    content: `Oops! The page you’re looking for isn’t here. Visit ${CompanyName} to find what you need.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/404-preview.jpg`,
  },
];

// Contact page
export const contactPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: CompanyName,
    url: FULL_BUSINESS_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CompanyPhoneNumber,
      contactType: 'Customer Service',
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
    sameAs: [
      FACEBOOK_BUSINESS_URL,
      INSTAGRAM_BUSINESS_URL,
      LINKEDIN_BUSINESS_URL,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${FULL_BUSINESS_URL}/brand/logo.png`,
    },
  },
};

export const contactPageAdditionalMeta = [
  { property: 'og:title', content: `Contact ${CompanyName}` },
  {
    property: 'og:description',
    content: `Reach out to ${CompanyName} for professional web and circuit design solutions. We're ready to discuss your projects and answer any questions.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/brand/contact-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/contact` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Contact ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Contact ${CompanyName} for expert web and circuit design services. Let's discuss your needs and find the best solution.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/brand/contact-preview.jpg`,
  },
];

// Album

export const albumPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `${CompanyName} Card Album`,
  description: `Discover and manage your collection of cards in the ${CompanyName} Album. Showcase your favorite cards and track your progress.`,
  url: `${FULL_BUSINESS_URL}/album`,
  mainEntity: {
    '@type': 'CreativeWork',
    name: 'Card Album',
    description: `A collection of trading cards to enhance your ${CompanyName} experience.`,
  },
};

export const albumPageAdditionalMeta = [
  { property: 'og:title', content: `Album - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Browse your card collection in the ${CompanyName} Album. Discover, organize, and showcase your collectible cards.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/album-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/album` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Album - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Explore your card collection and showcase your favorite cards in the ${CompanyName} Album.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/album-preview.jpg`,
  },
];

// Trade
export const tradingPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Trading',
  description: `Trade your cards in ${CompanyName}'s trading hub. Discover new cards and exchange with other players.`,
  url: `${FULL_BUSINESS_URL}/trading`,
  mainEntity: {
    '@type': 'Service',
    name: 'Card Trading Service',
    description: `A platform to trade collectible cards within ${CompanyName}. Connect with other players to enhance your collection.`,
    provider: {
      '@type': 'Organization',
      name: CompanyName,
      url: FULL_BUSINESS_URL,
    },
    areaServed: 'Worldwide',
    audience: {
      '@type': 'Audience',
      name: 'Card Collectors and Players',
    },
  },
};

export const tradingPageAdditionalMeta = [
  { property: 'og:title', content: `Trading - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Trade your cards with other players in the ${CompanyName} trading hub. Discover new cards and enhance your collection.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/trading-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/trading` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Trading - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Join the ${CompanyName} trading hub to exchange cards and grow your collection.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/trading-preview.jpg`,
  },
];

// Shop
export const shopPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shop',
  description: `Discover and purchase cards, accessories, and more in the ${CompanyName} online shop.`,
  url: `${FULL_BUSINESS_URL}/shop`,
  mainEntity: {
    '@type': 'Store',
    name: `${CompanyName} Online Shop`,
    description: `Official store of ${CompanyName}. Browse cards and accessories to enhance your gaming experience.`,
    url: `${FULL_BUSINESS_URL}/shop`,
    image: `${FULL_BUSINESS_URL}/assets/images/pages/shop-preview.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressRegion: 'Your Region',
      postalCode: 'Your Postal Code',
      addressCountry: 'Your Country',
    },
  },
};
export const shopPageAdditionalMeta = [
  { property: 'og:title', content: `Shop - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Browse the ${CompanyName} shop for exclusive cards, accessories, and more.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/shop-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/shop` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Shop - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Discover exclusive cards and accessories in the ${CompanyName} shop. Enhance your collection today!`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/shop-preview.jpg`,
  },
];

// Rewards
export const rewardsPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Rewards',
  description: `Discover the rewards and benefits available at ${CompanyName}. Earn points and unlock exclusive perks.`,
  url: `${FULL_BUSINESS_URL}/rewards`,
  mainEntity: {
    '@type': 'OfferCatalog',
    name: `${CompanyName} Rewards Program`,
    description: `Exclusive rewards and benefits for ${CompanyName} users. Earn points and unlock valuable items.`,
    url: `${FULL_BUSINESS_URL}/rewards`,
  },
};

export const rewardsPageAdditionalMeta = [
  { property: 'og:title', content: `Rewards - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Explore the ${CompanyName} Rewards Program. Earn points and redeem them for exclusive rewards and benefits.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/rewards-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/rewards` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Rewards - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Unlock exclusive rewards and perks with the ${CompanyName} Rewards Program.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/rewards-preview.jpg`,
  },
];

// Invintory
export const inventoryPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Inventory',
  description: `Manage your ${CompanyName} inventory. View your collected items and organize them efficiently.`,
  url: `${FULL_BUSINESS_URL}/inventory`,
  mainEntity: {
    '@type': 'ItemList',
    name: `${CompanyName} Inventory`,
    description: `Your collection of items in ${CompanyName}. Keep track of your assets and manage your inventory.`,
    itemListOrder: 'Unordered',
    numberOfItems: 0, // Update dynamically with the number of items.
  },
};

export const inventoryPageAdditionalMeta = [
  { property: 'og:title', content: `Inventory - ${CompanyName}` },
  {
    property: 'og:description',
    content: `View and manage your items in the ${CompanyName} Inventory. Keep track of your collection.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/inventory-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/inventory` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Inventory - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Access your inventory and manage your collection in ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/inventory-preview.jpg`,
  },
];

export const inventoryItemsPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Inventory Items',
  description: `View and manage your inventory items in ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/inventory`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Sample Item 1',
        url: `${FULL_BUSINESS_URL}/inventory/sample-item-1`,
      },
      {
        '@type': 'Thing',
        name: 'Sample Item 2',
        url: `${FULL_BUSINESS_URL}/inventory/sample-item-2`,
      },
      // Add more items dynamically or use as a template. TODO:
    ],
  },
};

export const inventoryItemsPageAdditionalMeta = [
  { property: 'og:title', content: `Inventory Items - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Manage your inventory items in ${CompanyName}. Keep track of your collected items and tools.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/inventory-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/inventory` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Inventory Items - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Browse and manage your inventory items in ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/inventory-preview.jpg`,
  },
];

// Battles
export const battlesPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Battles',
  description: `Manage your battles and challenge opponents in ${CompanyName}. View ongoing battles and start new ones.`,
  url: `${FULL_BUSINESS_URL}/battles`,
  mainEntity: {
    '@type': 'VideoGame',
    name: `${CompanyName} Battles`,
    description: `A competitive battle platform within ${CompanyName} where players can engage in strategic battles and track their progress.`,
    url: `${FULL_BUSINESS_URL}/battles`,
  },
};
export const battlesPageAdditionalMeta = [
  { property: 'og:title', content: `Battles - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Challenge opponents and manage your battles on ${CompanyName}. View ongoing battles and start new challenges.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/battles-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/battles` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Battles - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Engage in strategic battles with other players on ${CompanyName}. Manage ongoing battles or start new ones.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/battles-preview.jpg`,
  },
];

export const battleRulesPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Battle Rules',
  description: `Learn about the battle rules and guidelines in ${CompanyName}. Prepare for battles with a comprehensive understanding of the rules.`,
  url: `${FULL_BUSINESS_URL}/battle-rules`,
  mainEntity: {
    '@type': 'CreativeWork',
    name: 'Battle Rules and Guidelines',
    description: `Detailed rules and guidelines for participating in battles within ${CompanyName}.`,
    url: `${FULL_BUSINESS_URL}/battle-rules`,
  },
};

export const battleRulesPageAdditionalMeta = [
  { property: 'og:title', content: `Battle Rules - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Understand the battle rules and guidelines for ${CompanyName}. Prepare yourself for strategic gameplay.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/battle-rules-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/battle-rules` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Battle Rules - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Get ready for battles with a clear understanding of the rules and guidelines for ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/battle-rules-preview.jpg`,
  },
];

export const openBattlePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Active Battle',
  description: `Engage in an ongoing battle within ${CompanyName}. Experience real-time gameplay and strategic combat.`,
  url: `${FULL_BUSINESS_URL}/battle/open-battle`,
  mainEntity: {
    '@type': 'VideoGame',
    name: 'Active Battle',
    description: `An active battle session in ${CompanyName}. Dive into the action and test your strategic skills.`,
    publisher: {
      '@type': 'Organization',
      name: CompanyName,
    },
    gamePlatform: 'Online',
  },
};
export const openBattlePageAdditionalMeta = [
  { property: 'og:title', content: `Active Battle - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Join an active battle in ${CompanyName} and showcase your skills in real-time combat.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/active-battle-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/battle/open-battle` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Active Battle - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Engage in a thrilling battle session on ${CompanyName}. Real-time action awaits!`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/active-battle-preview.jpg`,
  },
];

export const battleFindOpponentPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Find Opponent for Battle',
  description: `Search and find opponents for battles in ${CompanyName}. Engage in exciting multiplayer matches.`,
  url: `${FULL_BUSINESS_URL}/battle/find-opponent`,
  mainEntity: {
    '@type': 'VideoGame',
    name: 'Battle Matchmaking',
    description: `A matchmaking system in ${CompanyName} where players find opponents to challenge in battles.`,
    publisher: {
      '@type': 'Organization',
      name: CompanyName,
    },
    gamePlatform: 'Online',
    gameMode: 'Multiplayer',
  },
};

export const battleFindOpponentPageAdditionalMeta = [
  { property: 'og:title', content: `Find Opponent - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Search and challenge opponents for exciting battles in ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/find-opponent-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/battle/find-opponent` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Find Opponent - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Join the action on ${CompanyName} by finding opponents for thrilling multiplayer battles.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/find-opponent-preview.jpg`,
  },
];

export const battlesRequestsPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Battle Requests',
  description: `View and manage your battle requests in ${CompanyName}. Challenge other players or respond to their challenges.`,
  url: `${FULL_BUSINESS_URL}/battle/requests`,
  mainEntity: {
    '@type': 'VideoGame',
    name: 'Battle Requests',
    description: `A list of active battle requests for players in ${CompanyName}. Engage in exciting battles by accepting challenges.`,
    gameMode: 'Multiplayer',
    publisher: {
      '@type': 'Organization',
      name: CompanyName,
    },
  },
};
export const battlesRequestsPageAdditionalMeta = [
  { property: 'og:title', content: `Battle Requests - ${CompanyName}` },
  {
    property: 'og:description',
    content: `View your active battle requests and respond to challenges in ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/battle-requests-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/battle/requests` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Battle Requests - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Manage your battle requests and engage in exciting matches on ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/battle-requests-preview.jpg`,
  },
];

// Decks
export const decksPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Decks Overview',
  description: `View and manage your saved decks in ${CompanyName}. Save up to 5 custom decks of cards.`,
  url: `${FULL_BUSINESS_URL}/decks`,
  mainEntity: {
    '@type': 'ItemList',
    name: 'Available Decks',
    description: `List of your saved decks in ${CompanyName}. Each deck contains a unique set of cards.`,
    itemListElement: Array.from({ length: 5 }, (_, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Deck ${i + 1}`,
    })),
  },
};
export const decksPageAdditionalMeta = [
  { property: 'og:title', content: `Decks - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Manage your decks in ${CompanyName}. Save up to 5 custom decks for your gameplay.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/decks-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/decks` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Decks - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Create and manage up to 5 decks in ${CompanyName}. Customize your gameplay experience.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/decks-preview.jpg`,
  },
];

// Cards
export const cardOverviewPageStructuredData = (cardData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: cardData.name || 'Unknown Card',
  description:
    cardData.description ||
    `Detailed information about ${cardData.name} in ${CompanyName}.`,
  image:
    cardData.image ||
    `${FULL_BUSINESS_URL}/assets/images/cards/default-card.jpg`,
  brand: CompanyName,
  url: `${FULL_BUSINESS_URL}/cards/${cardData.slug || cardData.name}`,
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Type',
      value: cardData.type || 'N/A',
    },
    {
      '@type': 'PropertyValue',
      name: 'Level',
      value: cardData.level || 'N/A',
    },
    {
      '@type': 'PropertyValue',
      name: 'Attack',
      value: cardData.attack || 'N/A',
    },
    {
      '@type': 'PropertyValue',
      name: 'Defense',
      value: cardData.defense || 'N/A',
    },
  ],
});

export const cardOverviewPageAdditionalMeta = (cardData) => [
  { property: 'og:title', content: `${cardData.name} - ${CompanyName}` },
  {
    property: 'og:description',
    content:
      cardData.description ||
      `Explore detailed information about ${cardData.name} in ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content:
      cardData.image ||
      `${FULL_BUSINESS_URL}/assets/images/cards/default-card.jpg`,
  },
  {
    property: 'og:url',
    content: `${FULL_BUSINESS_URL}/cards/${cardData.slug || cardData.name}`,
  },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `${cardData.name} - ${CompanyName}` },
  {
    name: 'twitter:description',
    content:
      cardData.description ||
      `Learn about the ${cardData.name} in ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content:
      cardData.image ||
      `${FULL_BUSINESS_URL}/assets/images/cards/default-card.jpg`,
  },
];

export const cardsAvailablePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Available Cards',
  description: `Browse the collection of available cards in ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/cards`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Sample Card 1',
        url: `${FULL_BUSINESS_URL}/cards/sample-card-1`,
      },
      {
        '@type': 'Thing',
        name: 'Sample Card 2',
        url: `${FULL_BUSINESS_URL}/cards/sample-card-2`,
      },
    ],
  },
};
export const cardsAvailablePageAdditionalMeta = [
  { property: 'og:title', content: `Available Cards - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Explore the complete collection of cards available in ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/cards-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/cards` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Available Cards - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Discover all the available cards in ${CompanyName}. Find the perfect cards for your deck.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/cards-preview.jpg`,
  },
];

export const cardsInBoxPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Opened Card Pack',
  description: `View the contents of your opened card pack in ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/packs/opened`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Card 1',
        position: 1,
        url: `${FULL_BUSINESS_URL}/cards/card-1`,
      },
      {
        '@type': 'Thing',
        name: 'Card 2',
        position: 2,
        url: `${FULL_BUSINESS_URL}/cards/card-2`,
      },
      // Add dynamic or placeholder data for pack contents.
    ],
  },
};
export const cardsInBoxPageAdditionalMeta = [
  { property: 'og:title', content: `Opened Pack - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Discover the cards in your opened pack from ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/pack-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/packs/opened` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Opened Pack - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `View the cards you received in your recently opened pack from ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/pack-preview.jpg`,
  },
];

export const cardsInPackPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Opened Card Packet',
  description: `View the cards inside your opened packet from ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/pack/opened`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Sample Card 1',
        position: 1,
        url: `${FULL_BUSINESS_URL}/cards/sample-card-1`,
      },
      {
        '@type': 'Thing',
        name: 'Sample Card 2',
        position: 2,
        url: `${FULL_BUSINESS_URL}/cards/sample-card-2`,
      },
      // Additional cards can be added dynamically.
    ],
  },
};
export const cardsInPackPageAdditionalMeta = [
  { property: 'og:title', content: `Opened Pack - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Discover the cards inside your opened packet from ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/pack-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/pack/opened` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Opened Pack - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Explore the contents of your recently opened packet from ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/pack-preview.jpg`,
  },
];

export const openPacksPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Unopened Packs',
  description: `View and manage your unopened card packs in ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/packs`,
  potentialAction: {
    '@type': 'Action',
    name: 'Buy New Packs',
    target: `${FULL_BUSINESS_URL}/shop`,
  },
};
export const openPacksPageAdditionalMeta = [
  { property: 'og:title', content: `Unopened Packs - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Check your collection of unopened packs and buy more from ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/unopened-packs-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/packs` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Unopened Packs - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Manage your unopened packs and expand your collection with new card packs.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/unopened-packs-preview.jpg`,
  },
];


export const unopenedBoxesPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Unopened Boxes',
  description: `View and manage your unopened card boxes in ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/boxes/unopened`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Sample Box 1',
        position: 1,
        url: `${FULL_BUSINESS_URL}/boxes/sample-box-1`,
      },
      {
        '@type': 'Thing',
        name: 'Sample Box 2',
        position: 2,
        url: `${FULL_BUSINESS_URL}/boxes/sample-box-2`,
      },
      // Add more dynamically as needed.
    ],
  },
};
export const unopenedBoxesPageAdditionalMeta = [
  { property: 'og:title', content: `Unopened Boxes - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Check your collection of unopened boxes and explore new cards in ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/unopened-boxes-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/boxes/unopened` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Unopened Boxes - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Manage your unopened boxes and discover exciting card packs inside.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/unopened-boxes-preview.jpg`,
  },
];

export const unopenedPacketsPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Unopened Packets',
  description: `View and manage your unopened card packets in ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/packets/unopened`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Sample Packet 1',
        position: 1,
        url: `${FULL_BUSINESS_URL}/packets/sample-packet-1`,
      },
      {
        '@type': 'Thing',
        name: 'Sample Packet 2',
        position: 2,
        url: `${FULL_BUSINESS_URL}/packets/sample-packet-2`,
      },
      // Add more dynamically as needed.
    ],
  },
};
export const unopenedPacketsPageAdditionalMeta = [
  { property: 'og:title', content: `Unopened Packets - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Check your collection of unopened packets and discover exciting new cards from ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/unopened-packets-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/packets/unopened` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Unopened Packets - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Manage your unopened packets and discover new cards in each pack.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/unopened-packets-preview.jpg`,
  },
];
