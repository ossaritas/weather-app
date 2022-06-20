import { Grid, Text } from '@chakra-ui/react';

import humdPng from '../../assets/icons/percentage.png';
import windPng from '../../assets/icons/windock.png';
import pressurePng from '../../assets/icons/atmospheric.png';

import Card from '../Card';
import ForElement from './Felement';

import { ucfirst, calcDay } from '../../utils/utils';

// Same as Weathers component with some basic changes.
const For = props => {
  return (
    <Card>
      <Text
        bg="mc3"
        borderRadius="sm"
        textAlign="center"
        fontWeight="semibold"
        color="sc1"
      >
        {props.day ? calcDay(props.day) : 'DD/MM/YYYY'}
      </Text>
      <Grid
        h="40"
        gap="8"
        p="4"
        px="8"
        mx="8"
        templateColumns="repeat(4,1fr)"
        alignItems="center"
        justifyItems="center"
      >
        <ForElement
          icon={`https://openweathermap.org/img/wn/${
            props.icon ?? '04d'
          }@4x.png`}
          title={props.title ? ucfirst(props.title) : 'Title'}
          description={(props.heat - 273.15).toFixed(1)}
          symb="&#x2103;"
        />
        <ForElement
          icon={humdPng}
          title={'Humidity'}
          symb="%"
          description={props.humidity}
        />
        <ForElement
          icon={windPng}
          title={'Wind Speed'}
          symb="m/s"
          description={props.wind}
        />
        <ForElement
          icon={pressurePng}
          title={'Pressure'}
          symb="hPa"
          description={props.pressure}
        />
      </Grid>
    </Card>
  );
};

export default For;
