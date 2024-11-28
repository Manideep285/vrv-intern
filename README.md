# VRV Security RBAC System

A modern Role-Based Access Control (RBAC) system built with React, TypeScript, and Tailwind CSS. This application demonstrates secure user authentication and authorization with a beautiful, responsive UI.

## Features

- 🔐 User Authentication
- 👥 User Management
- 🛡️ Role-Based Access Control
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- 🔄 State Management with Zustand
- ✨ Form Validation with Zod
- 🚀 Built with Vite

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher) or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd vrv-security-rbac
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
project/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   │   ├── admin/         # Admin panel pages
│   │   └── auth/          # Authentication pages
│   ├── store/             # Zustand store definitions
│   ├── types/             # TypeScript type definitions
│   ├── data/             # Mock data
│   └── App.tsx           # Main application component
├── public/               # Static assets
└── package.json         # Project dependencies and scripts
```

## Features in Detail

### Authentication System
- Secure login/logout functionality
- Protected routes with role-based access
- JWT token management
- Persistent authentication state

### User Management
- View all users in a paginated table
- Add new users with role assignment
- Edit existing user details
- Delete users with confirmation
- Role-based permissions

### Role Management
- Create custom roles
- Assign permissions to roles
- Edit role details and permissions
- Delete roles with confirmation
- Visual permission management

### UI/UX Features
- Responsive design for all screen sizes
- Modern and clean interface
- Interactive feedback for user actions
- Form validation with error messages
- Loading states and transitions
- Modal forms for editing
- Confirmation dialogs for destructive actions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Default Users

The system comes with two default users for testing:

1. Admin User
   - Email: admin@vrvsecurity.com
   - Password: admin123
   - Role: admin

2. Regular User
   - Email: user@vrvsecurity.com
   - Password: user123
   - Role: user

## Default Roles

Three default roles are available:

1. Admin
   - Full system access
   - All permissions granted

2. Moderator
   - Limited management access
   - Can manage users
   - Can view dashboard

3. User
   - Basic access
   - Can view dashboard only

## Component Documentation

### UserManagement Component
The UserManagement component provides a complete interface for managing users:
- Display users in a sortable table
- Add new users with form validation
- Edit existing users
- Delete users with confirmation
- Role assignment

### RoleManagement Component
The RoleManagement component handles all role-related operations:
- List all roles with their permissions
- Create new roles
- Edit role permissions
- Delete roles
- Visual permission management

### Protected Routes
The application uses protected routes to ensure secure access:
- Routes are protected based on user roles
- Unauthorized access redirects to login
- Role-based component rendering

## State Management

The application uses Zustand for state management with the following stores:

### AuthStore
- Handles user authentication
- Manages JWT tokens
- Stores current user info
- Handles login/logout

### UserStore
- Manages user data
- Handles CRUD operations
- Stores user list
- Manages user updates

### RoleStore
- Manages role definitions
- Handles role CRUD operations
- Stores available permissions
- Manages role assignments

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository or contact the development team.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Zustand for the simple yet powerful state management
- All other open-source contributors
