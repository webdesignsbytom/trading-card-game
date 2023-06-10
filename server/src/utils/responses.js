// Status responses
const STATUS_MESSAGES = {
  200: 'success',
  201: 'success',
  400: 'fail',
  401: 'fail',
  403: 'fail',
  404: 'fail',
  500: 'error',
};

export const EVENT_MESSAGES = {
  badRequest: `Bad Request`,
  notFound: `Not Found`,
  notFoundOpponent: `Not Found battle opponent`,
  missingUserIdentifier: `Missing User identifier`,
  missingFields: `Missing fields in request`,
  alreadyClaimed: `Already Claimed`,
  // Battles
  battleTag: `Battle database`,
  battleNotFound: `Failed to find battle/s`,
  userBattlesNotFound: `Failed to find user battles`,
  createBattleFail: `Failed to create battle`,
  markBattleViewedFailed: `Failed to mark battle as viewed`,
  oppenentNotFound: `Failed to find opponent user`,
  // Complaints
  complaintTag: `Complaint database`,
  complaintNotFound: `Failed to find complaint/s`,
  userComplaintsNotFound: `Failed to find user complaints`,
  createComplaintFail: `Failed to create complaint`,
  markComplaintViewedFailed: `Failed to mark complaint as viewed`,
  // Contacts
  contactTag: `Contact database`,
  contactNotFound: `Failed to find contact/s`,
  createContactFail: `Failed to create contact`,
  // Events
  eventTag: `Event database`,
  eventNotFound: `Failed to find event`,
  createEventFail: `Failed to create event`,
  eventNotDeleted: `Failed to delete event`,
  // Cards
  cardsTag: `Cards database`,
  notFoundCards: `Failed to find cards/s`,
  notFoundInstances: `Failed to find cards/s`,
  userCardsNotFound: `Failed to find user cards`,
  notFoundCardType: `Cant find card type`,
  createCardsFail: `Failed to create cards`,
  markCardsViewedFailed: `Failed to mark cards as viewed`,
  // Decks
  decksTag: `Decks database`,
  notFoundDecks: `Failed to find decks/s`,
  notFoundInstances: `Failed to find decks/s`,
  userDecksNotFound: `Failed to find user decks`,
  notFoundDeckType: `Cant find deck type`,
  createDecksFail: `Failed to create decks`,
  markDecksViewedFailed: `Failed to mark decks as viewed`,
  deckNotDeleted: `Deck not deleted`,
  // Packs
  packTypesTag: `PackType database`,
  notFoundPack: `Failed to find pack`,
  notFoundPackType: `Failed to find packType/s`,
  userPackTypesNotFound: `Failed to find user packTypes`,
  createPackTypeFail: `Failed to create packType`,
  markPackTypeViewedFailed: `Failed to mark packType as viewed`,
  startPacksAlreadyClaimed: `User has already claimed starter packs`,
  // Reviews
  reviewsTag: `Review database`,
  notFoundReview: `Failed to find review/s`,
  userReviewsNotFound: `Failed to find user reviews`,
  createReviewFail: `Failed to create review`,
  markReviewViewedFailed: `Failed to mark review as viewed`,
  // Trades
  tradesTag: `Trade database`,
  notFoundTrade: `Failed to find trade/s`,
  userTradesNotFound: `Failed to find user trades`,
  createTradeFail: `Failed to create trade`,
  markTradeViewedFailed: `Failed to mark trade as viewed`,
  // Users
  userTag: `User databased`,
  userNotFound: `Failed to find user/s`,
  emailInUse: `Email already in use`,
  usernameInUse: `Username already in use`,
  emailNotFound: `Email not found in database`,
  createUserFail: `Failed to create new user`,
  passwordMatchError: `Password match error for reset Password - New passwords do not match`,
  passwordResetError: `Account record doesn't exist or has been reset already.`,
  // Verification
  verificationTag: `Verification database`,
  verificationNotFound: `Failed to find verification`,
  verificationNotFoundReturnMessage: `Account record doesn't exist or has been verified already. Please sign up or log in.`,
  expiredLinkMessage: `Links has expired, please sign up or log in and check your account`,
  invalidVerificationMessage: `Invalid verification details passed. Check your inbox, or contact support`,
};
// Error responses for eventEmitter/errors
export const RESPONSE_MESSAGES = {
  ConfictEvent: 'Request conflicts with data on server',
  DeactivatedUserEvent: 'The target user account has been deactivated',
  ServerErrorEvent: 'Internal Server Error',
  CreateEventError: 'Failed to create an event log',
  NotFoundEvent: 'was not found',
  NoPermissionEvent: 'You are not authorized to perform this action',
  NoValidationEvent: 'Unable to verify user',
  BadRequestEvent: 'Incorrect request syntax or malformed request',
  MissingFieldEvent: 'Missing fields in body',
};

// Data responses
export function sendDataResponse(res, statusCode, payload) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
}

// Error responses
export function sendMessageResponse(res, statusCode, message) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    message,
  });
}
