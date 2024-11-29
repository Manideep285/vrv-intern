import { Role } from '../types/role';

export const defaultRoles: Role[] = [
  {
    id: '1',
    name: 'admin',
    description: 'Full system access',
    permissions: ['manage_users', 'manage_roles', 'view_dashboard'],
  },
  {
    id: '2',
    name: 'moderator',
    description: 'Limited management access',
    permissions: ['view_dashboard', 'manage_users'],
  },
  {
    id: '3',
    name: 'user',
    description: 'Basic access',
    permissions: ['view_dashboard'],
  },
];