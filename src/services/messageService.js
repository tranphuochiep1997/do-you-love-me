import {config} from "../constants/config";

const getMessagesByRoomId = async (roomId) => {
  const response = await fetch(`${config.SERVER_API}/messages?roomId=${roomId}`, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
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