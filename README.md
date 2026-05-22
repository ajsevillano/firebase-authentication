# Firebase Authentication

> A React authentication system using Firebase v8 as the backend. Demonstrates a full auth flow including sign up, login, forgot password, and profile updates, protected by a custom private route component.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

## Features

- Sign up, login, logout
- Forgot password (email reset)
- Update profile (email and password)
- Protected dashboard via `PrivateRoute`
- Auth state managed via React Context

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

Create a `.env` file with your Firebase project credentials:

```env
REACT_APP_API_KEY=...
REACT_APP_AUTH_DOMAIN=...
REACT_APP_PROJECT_ID=...
```

### 3. Run the app

```bash
npm start
```

## Tech Stack

- React 17
- Firebase v8 (Authentication)
- React Bootstrap
- React Router v5
