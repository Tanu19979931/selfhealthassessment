import React, { Component } from 'react';
import './CWD_details.css'
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import ARROW from '../../../assets/right_arrow.png'

export default class CWD_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      Data: []
    }
  }
  async componentDidMount() {
    try {
      var response = await axios.get('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', {
        headers: {
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
          'x-rapidapi-key': 'c157938e4dmsh775aa8ed7b66e5cp147a90jsnea10016d33f1'
        }
      })
      console.log("HIIIIIII   " + response.data);
      this.setState({ Data: response.data })
      //ThreeLetterSymbol

    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const newTo = {
      pathname: "/Covid19/Covid19Statatistics/Covid19CountryWise",
      param1: "Par1"
    };
    return <div className="main">
      <h1 className='main_head'>Country Wise Detailed Data</h1>
      <div className='card_container'>
          {this.state.Data.map((item, index) => {

            return (
              item.rank > 0 &&
              <div className="cards_item" key={index}>
                
                  <div className="card_image">
                    <img className='card_image_img' src={`https://flagcdn.com/${item.TwoLetterSymbol}.svg`} />
                  </div>
                    <Link className='link' to={{
                        pathname: "/Covid19/Covid19Statatistics/Covid19CountryWise",
                        state: { fromDashboard: true },
                        search: "abc"
                      }}>  <div className="btn_card_btn">
                        <img className='arrow_img' src={ARROW} />
                         </div></Link>
                  <div className="card_content">
                    <h1 className="card_title">{item.Country}</h1>
                    
                    <p className="card_text">
                      Population : {item.Population}<br />
                      TotalCases : {item.TotalCases}<br />
                      TotalDeaths : {item.TotalDeaths}<br />
                      TotalRecovered : {item.TotalRecovered}<br />
                      ActiveCases : {item.ActiveCases}<br />
                      TotalTests : {item.TotalTests}<br />
                      Infection_Risk : {item.Infection_Risk}<br />

                    </p>
                   
                      
                    
                  </div>
                </div>
            )
          })}
      </div>
    </div>;
  }
}
