import { View } from 'react-native';

import { Box, Button, Container, Text } from '../../components';
import { TextInput } from '../components/Forms/TextInput';
import { Checkbox } from '../components/Forms/Checkbox';
import { SocialLogin } from '../components/SocialLogin';

const emailValidator = (email: string) => {
  return !!email.match(
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text textAlign="center" variant="body" marginBottom="l">
          Use your credentials below to sign in to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button
            onPress={() => {
              alert('pressed');
            }}
            variant="transparent"
          >
            <Text color="primary">Forgot password?</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log in to your account"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Container>
  );
};
