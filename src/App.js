//task
// import React from 'react'
// import MainPage from './Components/MainPage'

// function App() {
//   return (
//     <div><MainPage/></div>
//   )
// }

// export default App



// import React from 'react'
// import Login from './Google/login'

// function App() {
//   return (
//     <div><Login/></div>
//   )
// }

// export default App
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Google/login';
import Home from './Google/Home';

const clientId = "523536851143-rarl2hk2a0lats3cvddo2dlt70at0oc3.apps.googleusercontent.com";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;