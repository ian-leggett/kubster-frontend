'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  loginRequiredRedirect: () => void;
};

const LOCAL_STORAGE_KEY = 'is-logged-in';
const AuthContext = createContext<AuthContextType | null>(null);

const LOGIN_REDIRECT_URL = '/';
const LOGOUT_REDIRECT_URL = '/login';
const LOGIN_REQUIRED_URL = '/login';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem(LOCAL_STORAGE_KEY, '1');
    const nextUrl = searchParams.get('next');
    const invalidNextUrl = ['/login', '/logout'];
    const nextUrlValid =
      nextUrl && nextUrl.startsWith('/') && !invalidNextUrl.includes(nextUrl);
    if (nextUrlValid) {
      router.replace(nextUrl);
    } else {
      router.replace(LOGIN_REDIRECT_URL);
    }
  };

  const loginRequiredRedirect = () => {
    setIsAuthenticated(false);
    let loginWithNextUrl = `${LOGIN_REQUIRED_URL}?next=${pathname}`;
    if (LOGIN_REQUIRED_URL === pathname) {
      loginWithNextUrl = `${LOGIN_REQUIRED_URL}`;
    }
    router.replace(loginWithNextUrl);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, '0');
    router.replace(LOGOUT_REDIRECT_URL);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loginRequiredRedirect
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
