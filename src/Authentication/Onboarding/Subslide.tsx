import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, Text } from '../../components';

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
    marginBottom: 12,
  },
  description: {
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
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
      <Text variant="title2" style={styles.subtitle}>
        {subTitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        onPress={onPress}
        label={last ? `Let's get started` : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </View>
  );
};
