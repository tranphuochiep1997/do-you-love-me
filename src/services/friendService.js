import {config} from "../constants/config";

  const makeFriend = async ({relatingUserId, relatedUserId}) => {
    const response = await fetch(`${config.SERVER_API}/friends`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        relatingUserId, 
        relatedUserId
      })
    });
    const json = await response.json();
    return json;
  }
  const getFriendId = async ({relatingUserId, relatedUserId}) => {
    const response = await fetch(`${config.SERVER_API}/friends/getFriendId`, {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        relatingUserId, 
        relatedUserId
      })
    });
    const json = await response.json();
    return json;
  }


export const friendService = {
  makeFriend
};