import { create } from 'zustand';
import { Role } from '../types/role';
import { defaultRoles } from '../data/mockRoles';

interface RoleState {
  roles: Role[];
  addRole: (role: Role) => void;
  updateRole: (id: string, updates: Partial<Role>) => void;
  deleteRole: (id: string) => void;
  getRoles: () => Role[];
}

export const useRoleStore = create<RoleState>((set, get) => ({
  roles: defaultRoles,
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (id, updates) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === id ? { ...role, ...updates } : role
      ),
    })),
  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((role) => role.id !== id),
    })),
  getRoles: () => get().roles,
}));