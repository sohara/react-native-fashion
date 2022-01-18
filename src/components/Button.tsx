import { useTheme } from '@shopify/restyle';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import type { Theme } from './Theme';
import { Text } from './Theme';

interface ButtonProps {
  variant?: 'primary' | 'default' | 'transparent';
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const Button = ({
  label,
  variant = 'default',
  onPress,
}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.grey;
  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.button;
  return (
    <RectButton style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text variant="button" style={[{ color }]}>
        {label}
      </Text>
    </RectButton>
  );
};
