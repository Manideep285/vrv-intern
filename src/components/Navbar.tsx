import { LogOut, Shield, Users, UserCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-indigo-600 dark:bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
            >
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">VRV Security</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <span className="text-sm">
                  Welcome, {user.name} ({user.role})
                </span>
                {user.role === 'admin' && (
                  <div className="flex space-x-2">
                    <Link
                      to="/admin/users"
                      className="flex items-center space-x-1 bg-indigo-700 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-indigo-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                    >
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </Link>
                    <Link
                      to="/admin/roles"
                      className="flex items-center space-x-1 bg-indigo-700 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-indigo-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                    >
                      <UserCog className="h-4 w-4" />
                      <span>Roles</span>
                    </Link>
                  </div>
                )}
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 bg-indigo-700 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-indigo-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="bg-indigo-700 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-indigo-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-700 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-indigo-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};