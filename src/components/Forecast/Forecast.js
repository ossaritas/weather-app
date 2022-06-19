import { useState, useEffect, useCallback } from 'react';
import { Box, Text, VStack, HStack, Button } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCityForecastQuery } from '../../store/weatherApi';
import For from './For';
import ScrollToTop from '../ScrollToTop';

const Forecast = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const { data } = useGetCityForecastQuery(city);

  return (
    <Box w="full" h="full">
      <ScrollToTop />
      <HStack
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)) , url(/${city}.jpg)`}
        w="full"
        h="200px"
        bgSize="cover"
        bgPosition="center"
        justify="center"
        color="#FFC000"
      >
        <Button onClick={() => navigate(-1)}>
          {' '}
          <ArrowLeftIcon w={6} h={6} />
        </Button>
        <Text fontWeight="bold" fontSize="xl">
          {`5-day weather forecast for ${city}`.toUpperCase()}
        </Text>
      </HStack>
      <VStack w="full" spacing="4" p="4">
        {data?.list.map((item, index) => {
          return (
            <For
              key={index}
              day={item.dt_txt}
              icon={item.weather[0].icon}
              title={item.weather[0].description}
              heat={item.main.temp}
              humidity={item.main.humidity}
              wind={item.wind.speed}
              pressure={item.main.pressure}
            />
          );
        })}
      </VStack>
    </Box>
  );
};

export default Forecast;
