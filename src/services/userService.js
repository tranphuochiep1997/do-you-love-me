import {config} from "../constants/config";

  const getUserById = async (userId) =>{
    const response = await fetch(`${config.SERVER_API}/users/${userId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    return json;
  }
  const getAllUser = async (search="", page=0)=>{
    let url = "";
    if (!!search){
      url = `${config.SERVER_API}/users?page=${page}&search=${search}`;
    } else {
      url = `${config.SERVER_API}/users?page=${page}`;
    }
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const json = response.json();
    return json;
  }
  const updateUser = async ({userId, user={}, accessToken})=>{
    const response = await fetch(`${config.SERVER_API}/users/${userId}`, {
      method: 'PUT',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${accessToken}`
      },
      body: JSON.stringify(user)
    });
    const json = await response.json();
    return json;
  }


export const userService = {
  getUserById,
  updateUser,
  getAllUser
};