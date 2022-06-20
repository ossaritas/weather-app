import { Route, Routes } from 'react-router-dom';

import Header from './components/Head/Header';
import Forecast from './components/Forecast/ForecastList';
import Weathers from './components/Weather/WeatherList';
import Footer from './components/Foot/Footer';
import Layout from './components/Layout';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Weathers />} /> {/* Main with 5 cities*/}
        <Route path="/:city" element={<Forecast />} /> {/* details page*/}
      </Routes>
      <Footer />
    </Layout>
  );
};
