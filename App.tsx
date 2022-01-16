import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from './src/Authentication/Onboarding';
import { LoadAssets } from './src/components';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};
// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <LoadAssets fonts={fonts}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
