import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { AuthContext } from '../features/auth';
import { useTransactions } from '../features/transactions';
import { Navigation } from '../ui/Navigation';

export default function Home(): JSX.Element {
  const {
    state: { firebaseStarted, user },
  } = useContext(AuthContext);

  const router = useRouter();
  const { transactions, isLoading } = useTransactions(
    firebaseStarted && Boolean(user)
  );

  useEffect(() => {
    if (firebaseStarted && !user) {
      router.push('/login');
    }
  }, [firebaseStarted, user]);

  if (!firebaseStarted || !user || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Scrooge</title>
        <meta
          name="description"
          content="Domestic finance management tool by Gui Santos"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />

        <h1 className={styles.title}>Welcome {user.name}</h1>

        <ul>
          {transactions.map((transaction, idx) => (
            <li key={idx}>{transaction.description}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
