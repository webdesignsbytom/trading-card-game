import { findPackById } from '../domain/packs.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { ServerErrorEvent } from '../event/utils/errorUtils.js';
import { createSinglePacksOfCards } from '../utils/createPackets.js';
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';

export const getPackById = async (req, res) => {
  console.log('getPackById');
  const id = Number(req.params.id)
  console.log('ID', id);

  try {

    const foundPack = await findPackById(id)
    console.log('Created Packs of cards', foundPack);

    return sendDataResponse(res, 201, { pack: foundPack });

  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get pack by id`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
}

export const createNewpack = async (req, res) => {
  console.log('createNewpack');
  const { packType } = req.body;
  console.log('Pack type: ' + packType);

  try {

    const createdPack = await createSinglePacksOfCards(packType)
    console.log('Created Packs of cards', createdPack);

    return sendDataResponse(res, 201, { packs: createdPack });

  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create pack of ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createPacksAndAddToUser = async (req, res) => {
  console.log('createPackAndAddToUser');
}



