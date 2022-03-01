import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Predictions from './components/PredictionsComp/Predictions'
import Covid19 from './components/Covid_19/Covid19'
import Covid19Statatistics from './components/Covid_19/CovidStatatistics'
import CovidVaccine from './components/Covid_19/CovidVaccine'
import CWD_Details_countryWise from './components/Covid_19/Covid_19_comps/CWD_Details_countryWise'
import Consultant from './components/Consultant/Consultant'
ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<Predictions />} />
      <Route path="/Covid19" element={<Covid19 />} />
      <Route path="/Covid19/Covid19Statatistics" element={<Covid19Statatistics />} />
      <Route path="/Covid19/CovidVaccine" element={<CovidVaccine />} />
      <Route path="/Covid19/Covid19Statatistics/Covid19CountryWise" element={<CWD_Details_countryWise />} />
      <Route path="/Consultant" element={<Consultant />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
    ,
  document.getElementById('root')
);

