import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';

import { Onboarding } from './src/Authentication/Onboarding';
import { LoadAssets, theme } from './src/components';
import { Welcome } from './src/Authentication/Welcome';

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

const AuthenticationStack = createNativeStackNavigator();

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
      <LoadAssets fonts={fonts}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
