import axios from 'axios';

export const fetchMessages = () => axios.get(`/api/messages`);
export const fetchMessage = (messageId) =>
  axios.get(`/api/messages/${messageId}`);
export const createMessage = (message) =>
  axios.post(`/api/messages`, { message });
