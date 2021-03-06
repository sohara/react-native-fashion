import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from './src/Authentication';
import { LoadAssets, theme } from './src/components';

const assets = [...authenticationAssets];

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets fonts={fonts} assets={assets}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
