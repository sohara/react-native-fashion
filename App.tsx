import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from './src/Authentication/Onboarding';

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};
// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
