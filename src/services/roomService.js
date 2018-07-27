import {config} from "../constants/config";

  const getRoomId = async ({relatingUserId, relatedUserId}) => {
    try {  
      const response = await fetch(`${config.SERVER_API}/rooms?users=${relatingUserId},${relatedUserId}`, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        mode: "cors"
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