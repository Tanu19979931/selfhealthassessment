import React, { Component } from 'react';
import axios from 'axios';
import IsoData from './IsoData.json'
import './TooltipDesign.css'

export default class TooliTipComponent extends Component {
    constructor(props){
        console.log(props.countryNm);
        super(props);
        this.state={
          totalConfirmedCases : '',
          totalConfirmedDeaths : '',
          gotData:false
        }
    }
    async componentDidMount(){
        console.log(this.props.countryNm);
        try{
        let response = await axios.get(`https://covid19.mathdro.id/api/countries/${String(IsoData[this.props.countryNm])}`)
            console.log("Got Response"+response.data.confirmed.value);
            this.setState({
              totalConfirmedCases : response.data.confirmed.value,
              totalConfirmedDeaths : response.data.deaths.value,
              gotData : true
            })
             console.log(String(IsoData[this.props.countryNm]).toLowerCase());
        }catch(error){
          console.log(error);
        }
          
    }
  render() {
    return <div className='secCont'>
        <img className='imgCont' src={`https://flagcdn.com/256x192/${String(IsoData[this.props.countryNm]).toLowerCase()}.png`} alt='flag'/>
        {this.state.gotData?
        <div className='DataContainer'>
        <div className='DataContainercc'>Confirmed Cases : </div>
        <div className='DataContainerccval'>{this.state.totalConfirmedCases} </div>
        <div className='DataContainercc'>Confirmed Deaths : </div>
        <div className='DataContainerccval'>{this.state.totalConfirmedDeaths} </div>
        </div> : 
        <div className='DataContainerccnull'>
          Loading<br/><br/>
          Loading
        </div>
        }
        
    </div>;
  }
}
