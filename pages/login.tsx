import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { auth } from '../features/firebase';
import { AuthContext } from '../features/auth';

export default function Login(): JSX.Element {
  const {
    state: { firebaseStarted, user },
  } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (firebaseStarted && user) {
      router.push('/');
    }
  }, [firebaseStarted, user]);

  // if user exists, we are waiting the user to be redirected to '/'
  if (!firebaseStarted || user) {
    return <p>Loading...</p>;
  }

  const handleSignIn = async () => {
    const provider = new auth.GoogleAuthProvider();
    await auth().signInWithRedirect(provider);
  };

  return (
    <main>
      <h1>Scrooge</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </main>
  );
}
