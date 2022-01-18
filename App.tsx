import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';

import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from './src/Authentication';
import { LoadAssets, theme } from './src/components';
import type { Routes } from './src/components/Routes';

const assets = [...authenticationAssets];

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

const AuthenticationStack = createNativeStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets fonts={fonts} assets={assets}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
