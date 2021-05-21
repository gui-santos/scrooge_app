import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import type { Transaction } from './types';
import { firestore } from '../firebase';

interface UseTransactions {
  transactions: Transaction[];
  isLoading: boolean;
}

export function useTransactions(isSignedIn: boolean): UseTransactions {
  const [isLoading, setFetchingTransactions] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const snap = await firestore.collection('transactions').get();
        const result = snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as Transaction;
        });

        setTransactions(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        router.push('/error');
      }

      setFetchingTransactions(false);
    };

    if (isSignedIn) {
      fetchTransactions();
    }
  }, [isSignedIn]);

  return { transactions, isLoading };
}
