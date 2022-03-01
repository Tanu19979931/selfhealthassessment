import React, { Component } from 'react'
import axios from 'axios';
import '../Cards/cards.css'
import './covid.css'
import {CovidList} from './CovidList'
import Cards from '../Cards/Cards';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const bg_img = require('../../assets/covid-19-backGround.jpg');

class Covid19 extends Component {
    constructor(){
        super();
        this.state={
            getRes: 'noRes',
            totalConfirmedCases : '',
            totalConfirmedDeath : ''
        }
    }
    componentDidMount() {
        axios.get('https://covid19.mathdro.id/api')
          .then(res => {
              console.log(res.data.confirmed.value);
              this.setState({
                  totalConfirmedCases : res.data.confirmed.value, 
                  totalConfirmedDeath : res.data.deaths.value
                })
          })
      }
    render() {
        return (
            <div className='top_container'>
                {/* <img src= {bg_img} className='top_background_img'/> */}
                <div className='top_background'>
                    {/* <img src= {bg_img} className='top_background_img'/> */}
                    <div className = 'bg_title'>World Data</div>
                    <div className='bg_stats'>
                    <div className = 'bg_confirmed_cases'>
                    Total Confirmed Cases: <br/>
                    {this.state.totalConfirmedCases}
                    </div>
                    <div className = 'bg_confirmed_deaths'>
                    Total Confirmed Death:<br/>
                    {this.state.totalConfirmedDeath}
                        </div>
                    </div>
                </div>
                <div className='headings_prediction_div'>
                    COVID-19 related Data
                </div>
                <div className="wrapper">
                    {CovidList.map((item, index) => {
                        return (
                            <Cards
                                key={index}
                                img={item.image}
                                title={item.title}
                                description={item.des}
                                btnName ={"View"}
                                url = {item.url}
                            />
                        )
                    })}
                   
                </div>
            </div>
        )
    }
}
export default Covid19;
