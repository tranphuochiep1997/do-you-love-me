import {config} from "../constants/config";

const getMessagesByRoomId = async ({roomId, page=0, accessToken}) => {
  const response = await fetch(`${config.SERVER_API}/messages?roomId=${roomId}&page=${page}`, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${accessToken}`
    }
  });
  const json = await response.json();
  return json;
}
const addNewMessage = async ({roomId, sender, body}) => {
  const response = await fetch(`${config.SERVER_API}/messages`, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({sender, roomId, body})
  });
  const json = await response.json();
  return json;
}

export const messageService = {
  addNewMessage,
  getMessagesByRoomId
};