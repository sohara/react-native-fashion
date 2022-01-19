import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { Routes } from '../components/Routes';

import { assets as onboardingAssets, Onboarding } from './Onboarding';
import { assets as welcomeAssets, Welcome } from './Welcome';
import { Login } from './Login';

export const assets = [...onboardingAssets, ...welcomeAssets];

const AuthenticationStack = createNativeStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
