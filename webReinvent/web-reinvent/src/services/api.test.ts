import axios from 'axios';
import { signIn } from './api';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Functions', () => {
  test('signIn should return data on success', async () => {
    const mockData = { token: '12345' };
    mockedAxios.post.mockResolvedValueOnce({ data: mockData });

    const data = await signIn('test@example.com', 'password123');
    expect(data).toEqual(mockData);
  });

  test('signIn should throw error on failure', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('Sign In failed'));

    await expect(signIn('test@example.com', 'password123')).rejects.toThrow('Sign In failed');
  });
});
