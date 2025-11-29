import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Layout from './pages/layout';
import { users } from './data/admins';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<typeof users[0] | null>(null);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />}
      />
      <Route
        path="/*"
        element={
          loggedIn && currentUser ? (
            <Layout setLoggedIn={setLoggedIn} currentUser={currentUser} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
