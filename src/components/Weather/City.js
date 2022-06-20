import { Text, VStack } from '@chakra-ui/react';

//Reusable City comp with images and date
const City = props => {
  return (
    <VStack
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)) , url(${props.url})`}
      w="300px"
      h="full"
      bgSize="cover"
      bgPosition="center"
      justify="center"
      borderRadius="md"
      color="white"
      _groupHover={{
        bgImage: `linear-gradient(rgba(200, 0, 0, 0.4),rgba(0, 0, 0, 0.5)) , url(${props.url})`,
      }}
    >
      <Text fontSize="xl" fontWeight="bold">
        {props.city}, {props.country}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {props.date}
      </Text>
    </VStack>
  );
};

export default City;
