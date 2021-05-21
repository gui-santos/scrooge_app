# Scrooge

It's a simple app to manage domestic finances

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

To start the devlopment environment locally:

```bash
npm run dev
# or
yarn dev
```

The app should be accessible at [http://localhost:3000](http://localhost:3000)

### Firebase

This project is using Firebase for its backend functionalities,
so to explore all te features you will need to set up Firebase Auth and Firestore.
To do that, create an `.env` file at the root of the project with these keys:

```txt
FIREBASE_API_KEY="PUT_YOUR_VALUE_HERE"
FIREBASE_AUTH_DOMAIN="PUT_YOUR_VALUE_HERE"
FIREBASE_DATABASE_URL="PUT_YOUR_VALUE_HERE"
FIREBASE_PROJECT_ID="PUT_YOUR_VALUE_HERE"
FIREBASE_STORAGE_BUCKET="PUT_YOUR_VALUE_HERE"
FIREBASE_MESSAGING_SENDER_ID="PUT_YOUR_VALUE_HERE"
FIREBASE_APP_ID="PUT_YOUR_VALUE_HERE"
```
