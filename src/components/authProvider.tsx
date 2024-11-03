'use client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type AuthContextType = {
  username: string;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  loginRequiredRedirect: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const LOGIN_REDIRECT_URL = '/';
const LOGOUT_REDIRECT_URL = '/login';
const LOGIN_REQUIRED_URL = '/login';
const LOCAL_STORAGE_KEY = 'is-logged-in';
const LOCAL_USERNAME_KEY = 'username';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedAuthStatus) {
      const storedAuthStatusInt = parseInt(storedAuthStatus);
      setIsAuthenticated(storedAuthStatusInt === 1);
    }
    const storedUsername = localStorage.getItem(LOCAL_USERNAME_KEY);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const login = (username: string) => {
    setIsAuthenticated(true);
    if (username) {
      localStorage.setItem(LOCAL_USERNAME_KEY, username);
      setUsername(username);
    } else {
      localStorage.removeItem(LOCAL_USERNAME_KEY);
    }
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
    localStorage.setItem(LOCAL_STORAGE_KEY, '0');
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
        username,
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
