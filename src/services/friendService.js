import {config} from "../constants/config";

  const getUserByFacebookId = async (facebookId) =>{
    const response = await fetch(`${config.SERVER_API}/users/${facebookId}`);
    const json = await response.json();
    return json;
  }
  


export const friendService = {
  getUserByFacebookId
};