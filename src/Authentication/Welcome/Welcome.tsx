import { Dimensions, Image } from 'react-native';

import { Box, theme, Text, Button } from '../../components';

const { width } = Dimensions.get('window');
const picture = {
  src: require('../assets/5.png'),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

export const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slide.grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="slide.grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Log in to your account or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {
              console.log('pressed');
            }}
          />
          <Button
            variant="default"
            label="Join us, it's Free"
            onPress={() => {
              console.log('pressed');
            }}
          />
          <Button
            variant="transparent"
            label="Forgot Password?"
            onPress={() => {
              console.log('pressed');
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
