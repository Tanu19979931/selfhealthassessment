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
import Self_Care from './components/Self_Care/Self_Care';
import BMI from './components/Self_Care/components/BMI';
import BMR from './components/Self_Care/components/BMR';
import BFP from './components/Self_Care/components/BFP';
import TDEE from './components/Self_Care/components/TDEE';
import Covid19News from './components/Covid_19/Covid19News';
import Predict_Breast_Cancer from './components/PredictionsComp/components/Predict_Breast_Cancer';
import Predict_Diabetes from './components/PredictionsComp/components/Predict_Diabetes';
ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<Predictions />} />
      <Route path='/Predict_breast_cancer' element={<Predict_Breast_Cancer/>} />
      <Route path='/Predict_diabetes' element={<Predict_Diabetes/>} />
      <Route path="/Covid19" element={<Covid19 />} />
      <Route path="/Covid19/Covid19Statatistics" element={<Covid19Statatistics />} />
      <Route path="/Covid19/CovidVaccine" element={<CovidVaccine />} />
      <Route path="/Covid19/Covid19Statatistics/Covid19CountryWise" element={<CWD_Details_countryWise />} />
      <Route path="/Consultant" element={<Consultant />} />
      <Route path="/Self_Care" element={<Self_Care />} />
      <Route path="/Self_Care/BMI" element={<BMI/>}/>
      <Route path="/Self_Care/BMR" element={<BMR/>} />
      <Route path="/Self_Care/BFP" element={<BFP/>} />
      <Route path="/Self_Care/TDEE" element={<TDEE/>} />
      <Route path="/Covid19/Covid19News" element={<Covid19News/>} />
      
      </Route>
      
    </Routes>
  </BrowserRouter>
    ,
  document.getElementById('root')
);

