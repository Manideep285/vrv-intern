import { ArrowRight, Shield, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <Shield className="mx-auto h-20 w-20 text-indigo-600 dark:text-indigo-400" />
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl">
            VRV Security
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Advanced AI-Driven Cybersecurity Solutions
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center mb-12 dark:text-white">
            Why Choose VRV Security?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <ShieldCheck className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                AI-Powered Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced artificial intelligence algorithms protecting your digital assets 24/7.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Global Presence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trusted by over 200 international clients across 5 continents.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Comprehensive Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack security solutions from cloud infrastructure to endpoint protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};