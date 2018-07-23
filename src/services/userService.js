import {config} from "../constants/config";

  const getUserByFacebookId = async (facebookId) =>{
    const response = await fetch(`${config.SERVER_API}/users/${facebookId}`);
    const json = await response.json();
    return json;
  }
  const createNewUser = async (user={})=>{
    const response = await fetch(`${config.SERVER_API}/users`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const json = await response.json();
    return json;
  }
  const getAllUser = async ()=>{
    const response = await fetch(`${config.SERVER_API}/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const json = response.json();
    return json;
  }
  const updateUser = async (facebookId, user={})=>{
    const response = await fetch(`${config.SERVER_API}/users/${facebookId}`, {
      method: 'PUT',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const json = await response.json();
    return json;
  }


export const userService = {
  getUserByFacebookId,
  createNewUser,
  updateUser,
  getAllUser
};