import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import * as jwt_decode from "jwt-decode";


const Signin = () => {
  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
   const decoded = jwt_decode.default(token);
   console.log("Decoded token:", decoded);

    // You can now send `token` to backend for auth
    console.log('Google User:', decoded);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="flex justify-center mt-8">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default Signin;
