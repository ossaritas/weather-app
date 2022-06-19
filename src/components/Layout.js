import { Box } from '@chakra-ui/react';

const Layout = props => {
  return (
    <Box
      w="full"
      h="full"
      bgGradient="linear-gradient(135deg, rgba(4,26,48,1) 0%, rgba(0,7,133,1) 100%)"
    >
      {props.children}{' '}
    </Box>
  );
};

export default Layout;
