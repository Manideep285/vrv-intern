import { create } from 'zustand';
import { User } from '../types/auth';
import { defaultUsers } from '../data/mockUsers';

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
  deleteUser: (id: string) => void;
  getUsers: () => User[];
}

export const useUserStore = create<UserState>((set, get) => ({
  users: defaultUsers,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updates) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updates } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  getUsers: () => get().users,
}));