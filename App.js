/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Main} from './Navigation/Main'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },
  },
});

const App = () => {

	return (
    <React.Fragment>
    <NavigationContainer>
        <QueryClientProvider client={queryClient}>
            <Main />
        </QueryClientProvider>
    </NavigationContainer>
</React.Fragment>
	);
};


export default App;
