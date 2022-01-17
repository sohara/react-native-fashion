import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  variant?: 'primary' | 'default';
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
  label: {
    fontSize: 15,
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
  },
});
export const Button = ({
  label,
  variant = 'default',
  onPress,
}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';
  return (
    <RectButton style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};
