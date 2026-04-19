import { fetcher } from './client';

export const authApi = {
  login: async (data: any) => {
    return fetcher<any>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  signup: async (data: any) => {
    return fetcher<any>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
