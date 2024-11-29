import { Pencil, Shield, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { useRoleStore } from '../../store/roleStore';
import { Role } from '../../types/role';

export const RoleManagement = () => {
  const { roles, deleteRole, updateRole, addRole } = useRoleStore();
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [isAddingRole, setIsAddingRole] = useState(false);

  const handleEdit = (role: Role) => {
    setEditingRole(role);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      deleteRole(id);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const roleData = {
      id: editingRole?.id || crypto.randomUUID(),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      permissions: Array.from(formData.getAll('permissions') as string[]),
    };

    if (editingRole) {
      updateRole(editingRole.id, roleData);
      setEditingRole(null);
    } else {
      addRole(roleData as Role);
      setIsAddingRole(false);
    }
  };

  const RoleForm = ({ role, title }: { role?: Role; title: string }) => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={() => role ? setEditingRole(null) : setIsAddingRole(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={role?.name}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue={role?.description}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Permissions
            </label>
            <div className="mt-2 space-y-2">
              {['manage_users', 'manage_roles', 'view_dashboard'].map((perm) => (
                <div key={perm} className="flex items-center">
                  <input
                    type="checkbox"
                    name="permissions"
                    value={perm}
                    defaultChecked={role?.permissions.includes(perm)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">{perm}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => role ? setEditingRole(null) : setIsAddingRole(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {role ? 'Save Changes' : 'Add Role'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
          <button
            onClick={() => setIsAddingRole(true)}
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <Shield className="h-5 w-5 mr-2" />
            Add Role
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {role.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{role.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission) => (
                        <span
                          key={permission}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(role)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4 transition-colors duration-200"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(role.id)}
                      className="text-red-600 hover:text-red-900 transition-colors duration-200"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {(editingRole || isAddingRole) && (
          <RoleForm
            role={editingRole}
            title={editingRole ? 'Edit Role' : 'Add New Role'}
          />
        )}
      </div>
    </div>
  );
};