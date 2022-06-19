import { VStack, Text, Image } from '@chakra-ui/react';
const ForElement = props => {
  return (
    <VStack
      boxShadow="md"
      h="120px"
      w="200px"
      justify="center"
      bgColor="mc3"
      borderRadius="md"
      color="white"
    >
      {props.time ? <Text align="center">{props.time}</Text> : null}
      <Text align="center">{props.title}</Text>
      <Image
        p="1.5"
        boxSize="40px"
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

export default ForElement;
