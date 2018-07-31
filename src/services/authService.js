import {config} from "../constants/config";

  const login = async ({email, password})=>{
    const response = await fetch(`${config.SERVER_API}/login`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    const json = await response.json();
    return json;
  }
  const register = async ({email, password})=>{
    const response = await fetch(`${config.SERVER_API}/register`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    const json = await response.json();
    return json;
  }
export const authService = {
  login,
  register
};