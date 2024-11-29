export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

export interface RoleState {
  roles: Role[];
  addRole: (role: Role) => void;
  updateRole: (id: string, updates: Partial<Role>) => void;
  deleteRole: (id: string) => void;
  getRoles: () => Role[];
}