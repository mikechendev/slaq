import axios from 'axios';

export const fetchUsers = (chatId) => axios.get(`/api/chats/${chatId}/users`);
