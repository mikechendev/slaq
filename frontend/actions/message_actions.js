import { createAction } from '@reduxjs/toolkit';

export const receiveMessages = createAction('receiveMessages');
export const receiveMessage = createAction('receiveMessage');
export const removeMessage = createAction('removeMessage');