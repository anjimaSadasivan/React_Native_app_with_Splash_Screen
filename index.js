/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import Store from './src/Store/index';

const queryClient = new QueryClient();

const AppComponent = () => (
  <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </QueryClientProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppComponent);
