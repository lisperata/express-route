import axios, { AxiosInstance } from 'axios';

export const PORT = 3000;

export const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});
