import { VStack, HStack, Image, Text } from '@chakra-ui/react';

import sunPng from '../../assets/icons/sun.png';

const Header = () => {
  return (
    <VStack
      spacing={4}
      position="sticky"
      top="0"
      zIndex="banner"
      bg="mc1"
      color="sc1"
    >
      <HStack
        p="1.5"
        alignItems="center"
        justify="center"
        w="full"
        h="20"
        spacing="6"
      >
        <Image
          p="1.5"
          boxSize="70px"
          objectFit="cover"
          src={sunPng}
          alt="Happy Sun!"
        />
        <Text userSelect="none" fontWeight="bold" fontSize="2xl" w="40">
          Weather App
        </Text>
      </HStack>
    </VStack>
  );
};

export default Header;
