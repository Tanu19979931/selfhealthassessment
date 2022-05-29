// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
import React, {Component} from 'react';
import './App.css';
import Covid19 from './components/Covid_19/Covid19';
import Navbar from "./components/Navbar/Navbar"
import Predictions from './components/PredictionsComp/Predictions';
import Covid19Statatistics from './components/Covid_19/CovidStatatistics';
import CovidVaccine from './components/Covid_19/CovidVaccine'
import CWD_Details_countryWise from './components/Covid_19/Covid_19_comps/CWD_Details_countryWise'
import Consultant from './components/Consultant/Consultant'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Self_Care from './components/Self_Care/Self_Care';
import BMI from './components/Self_Care/components/BMI';
import BMR from './components/Self_Care/components/BMR';
import BFP from './components/Self_Care/components/BFP';
import TDEE from './components/Self_Care/components/TDEE';
import Covid19News from './components/Covid_19/Covid19News';
import Predict_Breast_Cancer from './components/PredictionsComp/components/Predict_Breast_Cancer';
import Predict_Diabetes from './components/PredictionsComp/components/Predict_Diabetes';
import Predict_Brain_Disease from './components/PredictionsComp/components/Predict_Brain_Disease';
import Predict_Heart_Disease from './components/PredictionsComp/components/Predict_Heart_Disease';
class App extends Component {
  constructor(props){
    super();
    this.state={
    }
  }
  render(){
    return (
      <div className="App">
      <Navbar/>
      <Routes>
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
      <Route path="/Predict_brain_disease" element={<Predict_Brain_Disease/>} />
      <Route path="/Predict_heart_disease" element= {<Predict_Heart_Disease/>} />
      </Routes>
      {/* {this.state.prediction && <Predictions/>}
      {this.state.covid_19 && <Covid19/>} */}
        {/* <BrowserRouter>
       <Routes>
      <Route path="/" element={<Predictions />} />
      <Route path="/Covid19" element={<Covid19 />} />
      
    </Routes>
  </BrowserRouter> */}
      
      </div>
    );
  }
}

export default App;
