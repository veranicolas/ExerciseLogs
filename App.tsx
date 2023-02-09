import React from 'react';
import { Login } from './src/pages/Login/Login';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {

  GoogleSignin.configure()

  return (
    <Login />
  );
}


export default App;
