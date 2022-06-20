import { Grid, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link as Reach } from 'react-router-dom';

import Weather from './Weather';

const Weathers = () => {
  const cities = ['Istanbul', 'London', 'Tokyo', 'Berlin', 'Moscow']; // Selected Cities Array, add or remove becareful with grid template rows if u add or remove
  return (
    <Grid templateRows="repeat(5,1fr)" gap="8" p="4">
      {' '}
      {cities?.map((item, index) => {
        return (
          <LinkBox role="group" zIndex="11" key={index}>
            {/* LinkBox element to wrap whole element as a link  */}
            <Weather city={item} />
            <LinkOverlay as={Reach} to={item} />
          </LinkBox>
        );
      })}
    </Grid>
  );
};

export default Weathers;
