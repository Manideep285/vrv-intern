import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useThemeStore } from './store/themeStore';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Unauthorized } from './pages/Unauthorized';
import { UserManagement } from './pages/admin/UserManagement';
import { RoleManagement } from './pages/admin/RoleManagement';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';

export default function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    // Apply dark mode class to html element for better dark mode coverage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className="page-container">
        <Navbar />
        <main className="animate-fade-in">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Landing />
                )
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/roles"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <RoleManagement />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}