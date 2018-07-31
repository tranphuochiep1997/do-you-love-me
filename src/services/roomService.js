import {config} from "../constants/config";

  const getRoomId = async ({relatedUserId, accessToken}) => {
    try {  
      const response = await fetch(`${config.SERVER_API}/rooms/${relatedUserId}`, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${accessToken}`
        },
      });
      const json = await response.json();
      return json;
    } catch(err){
      console.log(err);
    }
  }

export const roomService = {
  getRoomId
};