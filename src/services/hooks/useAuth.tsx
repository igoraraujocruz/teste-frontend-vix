import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import Router from 'next/router';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { api } from '../api';

interface User {
  name: string;
}

interface SignInCredentials {
  name: string;
  password: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, 'vix-teste:token', { path: '/' });
  destroyCookie(undefined, 'vix-teste:refreshToken', { path: '/' });

  authChannel?.postMessage('signOut');

  Router.push('/');
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');
    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          Router.push('/');
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { 'vix-teste:token': token } = parseCookies();

    if (token) {
      api
        .get('user/me')
        .then(response => {
          const { name } = response.data;

          setUser({ name });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ name, password }: SignInCredentials) {
    const response = await api.post('auth', {
      name,
      password,
    });

    const { token, refreshToken, user } = response.data;

    setCookie(undefined, 'vix-teste:token', token, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    setCookie(undefined, 'vix-teste:refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    setUser({
      name: user.name,
    });

    api.defaults.headers.Authorization = `Bearer ${token}`;

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
