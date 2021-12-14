import {
  VercelRequest,
  VercelResponse
} from "@vercel/node";

import { playerDetails } from '../data/PlayerDetails';
import { playerOverviews } from '../data/PlayerOverviews';

export default (request: VercelRequest, response: VercelResponse) => {
  const { query } = request;
  console.log(query);
  if (query && query.playerId) {
  console.log(playerDetails);
    // If playerId is passed as query parameter, return player details
    const playerDetail = playerDetails.filter(el => el.playerId === playerId);
    // wrap it as per previous API
    const wrappedPlayer = {
      playerDetail
    };
    console.log(wrappedPlayer);
    response.status(200).json(wrappedPlayer);
  } else {
    // Otherwise, return full list of player overviews
    // wrap it as per previous API
  console.log(playerOverviews);
    const wrappedOverview = {
      players: playerOverviews
    };
    console.log(wrappedOverview);
    response.status(200).json(wrappedOverview);
  }
};
