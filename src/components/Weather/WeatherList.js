import { Grid, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link as Reach } from 'react-router-dom';

import Weather from './Weather';

const Weathers = () => {
  const cities = ['Istanbul', 'London', 'Tokyo', 'New+York', 'Moscow'];
  return (
    <Grid templateRows="repeat(5,1fr)" gap="8" p="4">
      {' '}
      {cities?.map((item, index) => {
        return (
          <LinkBox key={index}>
            <LinkOverlay as={Reach} to={item}>
              <Weather city={item} />
            </LinkOverlay>
          </LinkBox>
        );
      })}
    </Grid>
  );
};

export default Weathers;
