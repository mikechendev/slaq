import axios from 'axios';

export const fetchMessages = (chatId) =>
  axios.get(`/api/chats/${chatId}/messages`);
export const fetchMessage = (messageId) =>
  axios.get(`/api/messages/${messageId}`);
export const createMessage = (chatId, message) =>
  axios.post(`/api/chats/${chatId}/messages`, { message });
