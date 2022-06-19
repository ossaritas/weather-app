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
      _groupHover={{ bg: 'mc4' }}
      transition="ease-out 200ms"
      role="group"
    >
      {props.children}
    </Box>
  );
};

export default Card;
