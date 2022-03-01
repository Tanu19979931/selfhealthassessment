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
      <Route path="/Covid19" element={<Covid19 />} />
      <Route path="/Covid19/Covid19Statatistics" element={<Covid19Statatistics />} />
      <Route path="/Covid19/CovidVaccine" element={<CovidVaccine />} />
      <Route path="/Covid19/Covid19Statatistics/Covid19CountryWise" element={<CWD_Details_countryWise />} />
      <Route path="/Consultant" element={<Consultant />} />
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
