import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Sign In failed');
  }
};


export const signUp = async (email: string, password: string) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Sign Up failed');
  }
};
