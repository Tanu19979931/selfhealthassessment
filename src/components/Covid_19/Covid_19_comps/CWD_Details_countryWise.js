import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom"
import axios from 'axios';
import './CWD_CountryWise.css'
import AwesomeSlider from 'react-awesome-slider';

export default function CWD_Details_countryWise() {
  const location = useLocation()
  const fromDashboard = location.state?.fromDashboard
  console.log(String(location.search).substring(1));
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchMyAPI() {
      try{
      let response = await  axios.get('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA', {headers:{
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'x-rapidapi-key': 'c157938e4dmsh775aa8ed7b66e5cp147a90jsnea10016d33f1'
      }});
      console.log("useeff  "+ response.data);
      setData(response.data);
      console.log(JSON.stringify(data));
    }catch(err){
      console.log(err);
    }
    }

    fetchMyAPI()
    

  },[])
  

  return <div className='gridContainer'>
    {data.map((item, index) => {
    return(
      <div className='containerBox' key={index}>
        <div className='containerTop'>
        <div className='containerStateNameBox'>
        <div  className='containerStateName'>{item.date}</div>
        </div>
        
        </div>
        
        <div className='containerTotalCases'>Total Cases : {item.total_cases}</div>
    </div>
    )
    })}
  </div>;
}

