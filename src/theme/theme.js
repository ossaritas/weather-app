import { extendTheme } from '@chakra-ui/react';
import { GlobalStyles as Global } from './customStyles/GlobalStyles';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: Global,
  },
  colors: {
    mc1: '#052749',
    mc2: '#354C72',
    mc3: '#60759E',
    mc4: '#8CA1CC',
    mc5: '#BBCFFD',
    mc6: '#CCD9F8',
    sc1: '#FFC000',
  },
  components: {},
});

export default theme;
