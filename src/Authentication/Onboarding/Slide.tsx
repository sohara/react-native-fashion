import React from 'react';
import type { ImageRequireSource } from 'react-native';
import { Dimensions, View, StyleSheet, Image } from 'react-native';

import { Text } from '../../components';

interface SlideProps {
  label: string;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Slide = ({ label, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image
          source={picture.src}
          style={{
            // ...StyleSheet.absoluteFillObject,
            width: width - BORDER_RADIUS,
            height: ((width - BORDER_RADIUS) * picture.height) / picture.width,
          }}
        />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  );
};
