import React from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { MainNavigator } from './src/routes/Navigators';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {

  GoogleSignin.configure()

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


export default App;
