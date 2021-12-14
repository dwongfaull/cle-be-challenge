import {
  VercelRequest,
  VercelResponse
} from "@vercel/node";

import { playerDetails } from '../data/PlayerDetails';
import { playerOverviews } from '../data/PlayerOverviews';

export default (request: VercelRequest, response: VercelResponse) => {
  const { query } = request;
  if (query && query.playerId) {
    // If playerId is passed as query parameter, return player details
    const playerDetail = playerDetails.filter(el => el.playerId.toString() === query.playerId);
    // wrap it as per previous API
    const wrappedPlayer = {
      playerDetail
    };
    response.status(200).json(wrappedPlayer);
  } else {
    // Otherwise, return full list of player overviews
    // wrap it as per previous API
    const wrappedOverview = {
      players: playerOverviews
    };
    response.status(200).json(wrappedOverview);
  }
};
