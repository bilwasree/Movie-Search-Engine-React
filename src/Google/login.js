import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = (response) => {
    console.log('Login Success! Current user:', response);
    navigate('/home');
  };

  const onFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <div id="signInButton" className="m-2 fw-bold">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
        text="signin_with"
        useOneTap
      />
    </div>
  );
};

export default Login;