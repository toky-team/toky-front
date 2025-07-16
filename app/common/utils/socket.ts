import { io } from 'socket.io-client';

export const chatSocket = io(`${import.meta.env.VITE_API_URL}/chat`, {
  withCredentials: true,
  transports: ['websocket'],
});
