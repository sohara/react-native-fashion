import { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text } from '../../../components';

interface CheckboxProps {
  label: string;
}
export const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: 'center' }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          height={20}
          width={20}
          marginRight="m"
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'white'}
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};
