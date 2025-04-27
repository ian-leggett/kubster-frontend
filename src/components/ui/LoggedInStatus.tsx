'use client';

import { useAuth } from '@/components/authProvider';

export const LoggedInStatus = (props) => {
  const auth = useAuth();
  const isAuthenticated = auth?.isAuthenticated || false;
  const user = auth?.user;

  if (!isAuthenticated) return null;
  return (
    <div className="flex items-center justify-end mb-4">
      <div
        className="px-3 py-1 bg-green-100 text-green-800
      dark:bg-green-900 dark:text-green-100"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
        Welcome back {user?.email || 'User'}
      </div>
    </div>
  );
};

export default LoggedInStatus;
