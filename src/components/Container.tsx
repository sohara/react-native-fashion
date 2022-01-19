import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { Dimensions, Image, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box, theme } from './Theme';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

export const assets = [require('./assets/patterns/1.png')];
const aspectRatio = 750 / 1125;
const { width } = Dimensions.get('window');
const height = width * aspectRatio;

export const Container = ({
  children,
  footer = <Text>hello</Text>,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar style="light" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            top: -height * 0.61,
            width,
            height,
            // borderBottomLeftRadius: theme.borderRadii.xl,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
      </Box>
      <Box height={insets.bottom} />
    </Box>
  );
};
