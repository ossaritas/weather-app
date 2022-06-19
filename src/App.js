import { Route, Routes } from 'react-router-dom';

import Header from './components/Head/Header';
import Forecast from './components/Forecast/Forecast';
import Weathers from './components/Weather/WeatherList';
import Footer from './components/Foot/Footer';
import Layout from './components/Layout';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Weathers />} />
        <Route path="/:city" element={<Forecast />} />
      </Routes>
      <Footer />
    </Layout>
  );
};
