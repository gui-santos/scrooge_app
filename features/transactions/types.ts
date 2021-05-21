export interface Transaction {
  id: string;
  description: string;
  value: number;
  category: string;
  date: { seconds: number; nanoseconds: number };
}
