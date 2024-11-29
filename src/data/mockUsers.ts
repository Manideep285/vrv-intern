import { User } from '../types/auth';

export const defaultUsers: User[] = [
  {
    id: '1',
    email: 'admin@vrvsecurity.com',
    password: 'admin123', // In a real app, this would be hashed
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@vrvsecurity.com',
    password: 'user123', // In a real app, this would be hashed
    name: 'Regular User',
    role: 'user',
  },
];