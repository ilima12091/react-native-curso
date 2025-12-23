import { login } from '../../../actions/auth/auth';
import { StorageAdapter } from '../../../config/adapters/storage.adapter';
import { User } from '../../../domain/entities/user';
import { AuthStatus } from '../../../infrastructure/interfaces/auth.status';
import { create } from 'zustand';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: AuthStatus.checking,
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    const resp = await login(email, password);

    if (!resp) {
      set({
        status: AuthStatus.unauthenticated,
        user: undefined,
        token: undefined,
      });

      return false;
    }

    await StorageAdapter.setItem('token', resp.token);

    set({
      status: AuthStatus.authenticated,
      user: resp.user,
      token: resp.token,
    });

    return true;
  },
  checkStatus: async () => {
    const token = await StorageAdapter.getItem('token');

    if (!token) {
      set({
        status: AuthStatus.unauthenticated,
        user: undefined,
        token: undefined,
      });
      return;
    }

    set({
      status: AuthStatus.authenticated,
      token,
    });
  },
  logout: async () => {
    await StorageAdapter.removeItem('token');
    set({
      status: AuthStatus.unauthenticated,
      user: undefined,
      token: undefined,
    });
  },
}));
