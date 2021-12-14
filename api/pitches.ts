import {
  VercelRequest,
  VercelResponse
} from "@vercel/node";

import { pitches } from '../data/Pitches';

export default (request: VercelRequest, response: VercelResponse) => {
  const { query } = request;
  if (query && query.playerId) {
    // If playerId is passed as query parameter, return player details
    const playerPitches = pitches.filter(el => el.pitcherId.toString() === query.playerId);
    // If performance is a concern, we could filter this at startup instead of in response to a query,
    // but that would mean we'd have to restart the service to push new data.
    if (playerPitches.length > 0) {
      // wrap it as per previous API
      const wrappedPlayer = {
        pitches: playerPitches
      };
      response.status(200).json(wrappedPlayer);
    } else {
      const res = {
        message: `Player with playerId = ${query.playerId} not found!`;
      }
      response.status(400).json(res);
    }
  } else {
    const res = {
      message: 'Must pass in playerId as a query param!';
    }
    response.status(400).json(res);
  }
};
