'use client';

import { useAuth } from '@/components/authProvider';

const LOGOUT_URL = '/api/logout/';

export default function Page() {
  const auth = useAuth();
  async function handleClick(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    };
    const response = await fetch(LOGOUT_URL, requestOptions);
    if (response.ok) {
      console.log('Logged out');
      auth.logout();
    }
  }
  return (
    <div className="h-[95vh]">
      <div className="max-w-md mx-auto py-5">
        <h1>Logout</h1>
        <button type="submit" onClick={handleClick}>
          Are you sure you want to logout
        </button>
      </div>
    </div>
  );
}
