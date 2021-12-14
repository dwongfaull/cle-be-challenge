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
    if (playerDetail.length > 0) {    
      // wrap it as per previous API
      const wrappedPlayer = {
        playerDetail: playerDetail[0]
      };
      response.status(200).json(wrappedPlayer);
    } else {
      const res = {
        message: `Player with playerId = ${query.playerId} not found!`;
      }
      response.status(400).json()
    }
  } else {
    // Otherwise, return full list of player overviews
    // wrap it as per previous API
    const wrappedOverview = {
      players: playerOverviews
    };
    response.status(200).json(wrappedOverview);
  }
};
