import React from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications';

import { MainNavigator } from './src/routes/Navigators';

const App = () => {

  GoogleSignin.configure()

  return (
    <ToastProvider>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </ToastProvider>
  );
}


export default App;
