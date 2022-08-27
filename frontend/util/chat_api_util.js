import axios from 'axios';

export const fetchChats = (workspaceId) =>
  axios.get(`/api/workspaces/${workspaceId}/chats`);
export const fetchChat = (chatId) => axios.get(`/api/chats/${chatId}`);
export const createChat = (chat) => axios.post('/api/chats', { chat });
export const updateChat = (chat) =>
  axios.patch(`/api/chats/${chat.id}`, { chat });
export const removeChat = (chatId) => axios.delete(`/api/chats/${chatId}`);
