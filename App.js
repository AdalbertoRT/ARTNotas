import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/Store';
import StackNavigator from './src/navigators/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    /* Provider englobará todo o aplicativo, ele que disponibiliza os dados a serem persistidos por todo o app*/
    /* PersistGate recupera os dados salvos no dispositivo - (AsyncStorage) */
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
