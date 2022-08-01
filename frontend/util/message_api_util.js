import axios from 'axios';

export const fetchMessages = () => axios.get(`/api/messages`);
export const fetchMessage = (messageId) =>
  axios.get(`/api/messages/${messageId}`);
export const createMessage = (chatId, message) =>
  axios.post(`/api/chats/${chatId}/messages`, { message });
