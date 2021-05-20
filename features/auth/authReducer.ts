import type { User } from './types';

import { auth } from '../firebase';

export enum AuthActionTypes {
  FB_AUTH_INITIATED = 'FB_AUTH_INITIATED',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

interface FirebaseAuthInitiatedAction {
  type: AuthActionTypes.FB_AUTH_INITIATED;
}

interface SignInAction {
  type: AuthActionTypes.SIGN_IN;
  payload: User;
}

interface SignOutAction {
  type: AuthActionTypes.SIGN_OUT;
}

export type AuthAction =
  | FirebaseAuthInitiatedAction
  | SignInAction
  | SignOutAction;

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
    case AuthActionTypes.SIGN_OUT:
      auth().signOut();
      return { ...state, user: undefined };
    default:
      return state;
  }
}
