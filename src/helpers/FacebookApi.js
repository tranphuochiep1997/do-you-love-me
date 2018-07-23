import {config} from "../constants/config";

  const getUser = async ({userID, accessToken})=>{
    const response = await fetch(`${config.GRAPH_API}/${userID}?fields=about,name, email,gender`, {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
      }
    });
    const json = await response.json();
    return json;
  }


export const FacebookApi = {
  getUser
};