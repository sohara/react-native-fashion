import { View } from 'react-native';

import { Box, Button, Container, Text } from '../../components';
import { SocialLogin } from '../components/SocialLogin';

export const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          label="heloow"
          variant="transparent"
          onPress={() => {
            alert('pressed');
          }}
        >
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text variant="button" color="primary" marginLeft="s">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container footer={footer}>
      <View>
        <Text>Login sdfdsfdsfsdfsdfs</Text>
      </View>
    </Container>
  );
};
