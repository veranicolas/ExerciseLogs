import React from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { MainNavigator } from './src/routes/Navigators';

const App = () => {

  GoogleSignin.configure()

  return (
    <MainNavigator />
  );
}


export default App;
