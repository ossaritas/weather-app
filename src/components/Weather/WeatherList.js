import { Grid, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link as Reach } from 'react-router-dom';

import Weather from './Weather';

const Weathers = () => {
  const cities = ['Istanbul', 'London', 'Tokyo', 'Berlin', 'Moscow'];
  return (
    <Grid templateRows="repeat(5,1fr)" gap="8" p="4">
      {' '}
      {cities?.map((item, index) => {
        return (
          <LinkBox role="group" zIndex="11" key={index}>
            <Weather city={item} />
            <LinkOverlay as={Reach} to={item} />
          </LinkBox>
        );
      })}
    </Grid>
  );
};

export default Weathers;
