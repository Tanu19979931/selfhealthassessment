import { Label } from "devextreme-react/vector-map";
import React, { Component } from "react";
import "./self_care_comp.css";
import axios from "axios";
import Loader from "react-js-loader";
export default class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculated: false,
      weight: '',
      height: '',
      invalidInp: false,
      bmi: 0,
      health: "",
      healthy_bmi_range: "",
      loading : false
    };
    this.handleCalculateClick = this.handleCalculateClick.bind(this);
    // this.handleResetClick = this.handleResetClick(this);
  }

  componentDidMount() {}
  async fetchBMIAPI() {}
  async handleCalculateClick() {
    // this.fetchBMIAPI();
    if(this.state.calculated == false){
      this.setState({calculated : true, loading: true})
    console.log("Clicked", this.state.weight);
    if (this.state.weight > 0 && this.state.height > 0) {
      try {
        let response = await axios.get(
          `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${String(
            this.state.weight
          )}&height=${String(this.state.height)}`,
          {
            headers: {
              "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
              "X-RapidAPI-Key":
                "c157938e4dmsh775aa8ed7b66e5cp147a90jsnea10016d33f1",
            },
          }
        );
        console.log("useeff  " + JSON.stringify(response.data.info));
        this.setState({
          bmi : response.data.info.bmi,
          health: response.data.info.health,
          healthy_bmi_range: response.data.info.healthy_bmi_range
        })
        this.setState({calculated : true, BMI_Calculator_Container: true, loading : false})
      } catch (err) {
        console.log(err);
      }
    } else {
      this.setState({calculated : false, loading : false})
      this.setState({ invalidInp: true });
    }
  }else{
    console.log("Reset Click");
    this.setState({
      weight: '',
      height: '',
      bmi: 0,
      health: "",
      healthy_bmi_range: "",
      calculated: false
    })
  }
  }
  handleResetClick(){
    console.log("Reset Click");
    // this.setState({
    //   weight: 0,
    //   height: 0,
    //   bmi: 0,
    //   health: "",
    //   healthy_bmi_range: "",
    //   calculated: false
    // })
  }
  render() {
    // console.log("Weight", this.state.weight);
    // console.log("Height", this.state.height);
    return (
      <div className="BMI_Component">
        <div
          className={
            this.state.calculated
              ? "BMI_Calculator_Container"
              : "BMI_Calculator_Container2"
          }
        >
          <div className="BMI_wight_block">
            <label className="BMI_label">Weight (in kg): </label>
            <input
              className="BMI_input"
              placeholder="Enter Your Weight"
              value={this.state.weight}
              onChange={(e) => this.setState({ weight: e.target.value })}
            />
          </div>

          <div className="BMI_ht_block">
            <label className="BMI_label">Height (in cm): </label>
            <input
              className="BMI_input"
              placeholder="Enter Your Height"
              value={this.state.height}
              onChange={(e) => this.setState({ height: e.target.value })}
            />
          </div>

          {this.state.calculated == false ? (
            <button
              className="BMI_btn_calculate"
              onClick={this.handleCalculateClick}
            >
              Calculate
            </button>
          ) : this.state.loading?
          <Loader type="box-up" bgColor={"#0000ff"} title={"box-up"} color={'#FFFFFF'} size={100} />
           :null}

          {this.state.invalidInp?
          <div className="BIM_invalid_inp">
            Please enter the valid weights and height
          </div>
          : null}
          {this.state.calculated && this.state.loading == false? <div>
            <div className="BMI_Val">BMI : {this.state.bmi}</div>
            <div className="BMI_remark">Remark : {this.state.health}</div>
            <div className="BMI_range">Healthy BMI range : {this.state.healthy_bmi_range}</div>
            <button
              className="BMI_btn_calculate2"
              onClick={this.handleCalculateClick}
            >
              Reset
            </button>
          </div>: null}
        </div>
      </div>
    );
  }
}
/*
bmi":20.2,"health":"Normal Weight","healthy_bmi_range":"18.5-24.9"
*/