import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Signin from './components/Profile/Signin.jsx';

function App() {
  return (
    <GoogleOAuthProvider clientId="">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Signin />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

