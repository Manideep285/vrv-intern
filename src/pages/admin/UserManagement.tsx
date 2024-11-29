import { Pencil, Trash2, UserPlus, X } from 'lucide-react';
import { useState } from 'react';
import { useUserStore } from '../../store/userStore';
import { User } from '../../types/auth';

export const UserManagement = () => {
  const { users, deleteUser, updateUser, addUser } = useUserStore();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isAddingUser, setIsAddingUser] = useState(false);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id);
    }
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingUser) return;

    const formData = new FormData(e.currentTarget);
    const updates = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as 'admin' | 'moderator' | 'user',
    };

    updateUser(editingUser.id, updates);
    setEditingUser(null);
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as 'admin' | 'moderator' | 'user',
      password: formData.get('password') as string,
    };

    addUser(newUser);
    setIsAddingUser(false);
  };

  const UserForm = ({ user, onSubmit, title, submitText }: { 
    user?: User; 
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; 
    title: string;
    submitText: string;
  }) => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={() => user ? setEditingUser(null) : setIsAddingUser(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {!user && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                minLength={6}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              defaultValue={user?.role || 'user'}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => user ? setEditingUser(null) : setIsAddingUser(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {submitText}
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
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <button 
            onClick={() => setIsAddingUser(true)}
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Add User
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
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'admin' 
                        ? 'bg-purple-100 text-purple-800'
                        : user.role === 'moderator'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4 transition-colors duration-200"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
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

        {editingUser && (
          <UserForm
            user={editingUser}
            onSubmit={handleUpdate}
            title="Edit User"
            submitText="Save Changes"
          />
        )}

        {isAddingUser && (
          <UserForm
            onSubmit={handleAdd}
            title="Add New User"
            submitText="Add User"
          />
        )}
      </div>
    </div>
  );
};