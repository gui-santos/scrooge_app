import type { User } from './types';

export enum AuthActionTypes {
  FB_AUTH_INITIATED = 'FB_AUTH_INITIATED',
  SIGN_IN = 'SIGN_IN',
}

interface FirebaseAuthInitiatedAction {
  type: AuthActionTypes.FB_AUTH_INITIATED;
}

interface SignInAction {
  type: AuthActionTypes.SIGN_IN;
  payload: User;
}

export type AuthAction = FirebaseAuthInitiatedAction | SignInAction;

export interface AuthState {
  firebaseStarted: boolean;
  user?: User;
}

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.FB_AUTH_INITIATED:
      return { ...state, firebaseStarted: true };
    case AuthActionTypes.SIGN_IN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
