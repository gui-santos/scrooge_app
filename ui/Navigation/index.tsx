import { useContext } from 'react';

import { AuthContext, AuthActionTypes } from '../../features/auth';

export function Navigation(): JSX.Element {
  const { dispatch } = useContext(AuthContext);

  const handleSignOut = () => {
    dispatch({ type: AuthActionTypes.SIGN_OUT });
  };

  return (
    <nav>
      <button onClick={handleSignOut}>Sign Out</button>
    </nav>
  );
}
