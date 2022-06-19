import { VStack, Text, Image } from '@chakra-ui/react';
const Welement = props => {
  return (
    <VStack
      boxShadow="md"
      h="full"
      justify="center"
      bgColor="mc3"
      borderRadius="md"
      color="white"
      p="2"
    >
      {props.time ? <Text align="center">{props.time}</Text> : null}
      <Text align="center" fontWeight="semibold">
        {props.title}
      </Text>
      <Image
        p="1.5"
        boxSize="60px"
        objectFit="cover"
        src={props.icon}
        alt={props.title}
      />
      <Text>
        {props.description} {props.symb}
      </Text>
      {props.status ? <Text>{props.status}</Text> : null}
    </VStack>
  );
};

export default Welement;
