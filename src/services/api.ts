import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user sign-in
export const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Sign In failed');
  }
};

// Function to handle user sign-up
export const signUp = async (email: string, password: string) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Sign Up failed');
  }
};

// Function to get a list of users
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Function to get a single user by ID
export const fetchUserById = async (id: number) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};
