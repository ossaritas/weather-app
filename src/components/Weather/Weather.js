import { Grid, Text } from '@chakra-ui/react';

import humdPng from '../../assets/icons/percentage.png';
import windPng from '../../assets/icons/windock.png';
import pressurePng from '../../assets/icons/atmospheric.png';
import sunrisePng from '../../assets/icons/sunrise.png';
import sunsetPng from '../../assets/icons/sunset.png';

import Card from '../Card';
import Welement from './Welement';
import City from './City';
import { useGetCityWeatherQuery } from '../../store/weatherApi';
import { ucfirst, getTime, calcTime } from '../../utils/utils';

const Weather = ({ city }) => {
  const { data, error, isLoading } = useGetCityWeatherQuery(city);

  return (
    <Card>
      {error && <p>{error.message}</p>}
      {!error && !isLoading && (
        <Grid
          h="60"
          spacing="16"
          templateColumns="repeat(7,1fr)"
          alignItems="center"
          gap="2"
          p="4"
          pb="0"
        >
          <City
            city={data?.name}
            date={calcTime(data?.timezone)}
            country={data?.sys.country}
            url={`/${city}.jpg`}
          />
          <Welement
            icon={`https://openweathermap.org/img/wn/${
              data ? data?.weather[0].icon : '01d'
            }@4x.png`}
            title={data ? ucfirst(data?.weather[0].description) : 'Status'}
            description={(data?.main.temp - 273.15).toFixed(1)}
            symb="&#x2103;"
          />
          <Welement
            icon={humdPng}
            title={'Humidity'}
            symb="%"
            description={data?.main.humidity}
          />
          <Welement
            icon={windPng}
            title={'Wind Speed'}
            symb="m/s"
            description={data?.wind.speed}
          />
          <Welement
            icon={pressurePng}
            title={'Pressure'}
            symb="hPa"
            description={data?.main.pressure}
          />
          <Welement
            icon={sunrisePng}
            title={'Sunrise'}
            description={getTime(data?.sys.sunrise)}
          />
          <Welement
            icon={sunsetPng}
            title={'Sunset'}
            description={getTime(data?.sys.sunset)}
          />
        </Grid>
      )}
      <Text fontSize="14px" pr="2.5" textAlign="end" color="sc1">
        Click anywere to see more
      </Text>
    </Card>
  );
};

export default Weather;
