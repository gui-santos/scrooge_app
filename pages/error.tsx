import { useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthContext, AuthActionTypes } from '../features/auth';

export default function Error(): JSX.Element {
  const { dispatch } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = () => {
    dispatch({ type: AuthActionTypes.SIGN_OUT });
    router.push('/login');
  };

  return (
    <main>
      <h1>Oops! Something went wrong</h1>
      <button onClick={handleSignOut}>Go back to login</button>
    </main>
  );
}
