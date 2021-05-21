import { createContext, useEffect, useReducer } from 'react';

import type { User } from './types';
import { auth } from '../firebase';
import {
  authReducer,
  AuthActionTypes,
  AuthState,
  AuthAction,
} from './authReducer';

const initialState: AuthState = {
  firebaseStarted: false,
};

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
} as AuthContextType);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth().onAuthStateChanged((authStoreUser) => {
      if (authStoreUser) {
        const userInfo = {
          name: authStoreUser.displayName,
          email: authStoreUser.email,
          picture: authStoreUser.photoURL,
        };

        dispatch({ type: AuthActionTypes.SIGN_IN, payload: userInfo as User });
      }

      dispatch({ type: AuthActionTypes.FB_AUTH_INITIATED });
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
