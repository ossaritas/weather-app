import { Box } from '@chakra-ui/react';

const Card = props => {
  return (
    <Box
      bg="mc2"
      w="auto"
      h="auto"
      borderRadius="lg"
      boxShadow="lg"
      fontSize="18px"
    >
      {props.children}
    </Box>
  );
};

export default Card;
