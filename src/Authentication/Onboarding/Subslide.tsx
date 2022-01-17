import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

import { Button } from '../../components';

interface SubslideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

// const { width, height } = Dimensions.get('window');
// export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
  },
  description: {
    fontFamily: 'SFProText-Regular',
    color: '#0C0D34',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  //   titleContainer: {
  //     height: 100,
  //     justifyContent: 'center',
  //   },
  //   title: {
  //     fontSize: 80,
  //     lineHeight: 80,
  //     fontFamily: 'SFProText-Bold',
  //     color: 'white',
  //     textAlign: 'center',
  //   },
});

export const Subslide = ({
  description,
  subTitle,
  last,
  onPress,
}: SubslideProps) => {
  //   const transform = [
  //     { translateY: (SLIDE_HEIGHT - 100) / 2 },
  //     { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
  //     { rotate: right ? '-90deg' : '90deg' },
  //   ];
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        onPress={onPress}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </View>
  );
};
