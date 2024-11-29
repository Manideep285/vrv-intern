import { ShieldOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <ShieldOff className="mx-auto h-16 w-16 text-red-600" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Access Denied
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          You don't have permission to access this resource.
        </p>
        <div className="mt-5">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};