import { Label } from "devextreme-react/vector-map";
import React, { Component } from "react";
import "./self_care_comp.css";
import axios from "axios";
import Loader from "react-js-loader";
export default class BFP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculated: false,
      weight: "",
      height: "",
      age: "",
      gender: "",
      invalidInp: false,
      bfp: 0,
      fat_mass: 0,
      lean_mass: 0,
      health: "",
      loading: false,
    };
    this.handleCalculateClick = this.handleCalculateClick.bind(this);
    // this.handleResetClick = this.handleResetClick(this);
  }

  componentDidMount() {}
  async fetchBMIAPI() {}
  async handleCalculateClick() {
    // this.fetchBMIAPI();
    this.setState({invalidInp : false})
    if (this.state.calculated == false) {
      console.log("Clicked", this.state.weight);
      if (
        this.state.weight > 0 &&
        this.state.height > 0 &&
        this.state.age > 0 &&
        (this.state.gender == "male" || this.state.gender == "female")
      ) {
        this.setState({ calculated: true, loading: true });
        try {
          let response = await axios.get(
            `https://mega-fitness-calculator1.p.rapidapi.com/bfp?weight=${String(
              this.state.weight
            )}&height=${String(this.state.height)}&age=${String(
              this.state.age
            )}&gender=${String(this.state.gender)}`,
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
            bmr: response.data.info.bmr,
            bfp: response.data.info.bfp,
            fat_mass: response.data.info.fat_mass,
            lean_mass: response.data.info.lean_mass,
            health: response.data.info.description,
          });
          this.setState({
            calculated: true,
            BMI_Calculator_Container: true,
            loading: false,
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        // this.setState({ calculated: false, loading: false });
        this.setState({ invalidInp: true });
      }
    } else {
      console.log("Reset Click");
      this.setState({
        weight: "",
        height: "",
        age: "",
        gender: "",
        bfp: 0,
        fat_mass: 0,
        lean_mass: 0,
        health: "",
        calculated: false,
      });
    }
  }
  handleResetClick() {
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
    console.log(
      "Weight" +
        this.state.weight +
        " " +
        this.state.height +
        " " +
        this.state.age +
        " " +
        this.state.gender
    );
    // console.log("Height", this.state.height);
    return (
      <div className="BFP_Component">
        <div
          className={
            this.state.calculated
              ? "BFP_Calculator_Container"
              : "BFP_Calculator_Container2"
          }
        >
          <div className="BFP_wight_block">
            <div className="BFP_label_div">
              <label className="BFP_label">Weight (in kg): </label>
            </div>
            <div className="BFP_input_div">
              <input
                className="BFP_input"
                placeholder="Enter Your Weight"
                value={this.state.weight}
                onChange={(e) => this.setState({ weight: e.target.value })}
              />
            </div>
          </div>

          <div className="BFP_ht_block">
            <div className="BFP_label_div">
              <label className="BFP_label">Height (in cm): </label>
            </div>
            <div className="BFP_input_div">
              <input
                className="BFP_input"
                placeholder="Enter Your Height"
                value={this.state.height}
                onChange={(e) => this.setState({ height: e.target.value })}
              />
            </div>
          </div>

          <div className="BFP_ht_block">
            <div className="BFP_label_div">
              <label className="BFP_label">Age: </label>
            </div>
            <div className="BFP_input_div">
              <input
                className="BFP_input"
                placeholder="Enter Your Age"
                value={this.state.age}
                onChange={(e) => this.setState({ age: e.target.value })}
              />
            </div>
          </div>

          <div className="BFP_ht_block">
            <div className="BFP_label_div">
              <label className="BFP_label">Gender (male/female): </label>
            </div>
            <div className="BFP_input_div">
              <input
                className="BFP_input"
                placeholder="Enter Your Gender"
                value={this.state.gender}
                onChange={(e) => this.setState({ gender: e.target.value })}
              />
            </div>
          </div>

          {this.state.calculated == false ? (
            <button
              className="BFP_btn_calculate"
              onClick={this.handleCalculateClick}
            >
              Calculate
            </button>
          ) : this.state.loading ? (
            <Loader
              type="box-up"
              bgColor={"#0000ff"}
              title={"box-up"}
              color={"#FFFFFF"}
              size={100}
            />
          ) : null}

          {this.state.invalidInp ? (
            <div className="BFP_invalid_inp">Please enter the valid inputs</div>
          ) : null}
          {this.state.calculated && this.state.loading == false ? (
            <div>
              <div className="BFP_Val">BFP : {Number((this.state.bfp).toFixed(2))}</div>
              <div className="BFP_Val" style={{ backgroundColor: "#1F0772" }}>
                Fat Mass : {Number((this.state.fat_mass).toFixed(2))}
              </div>
              <div className="BFP_Val" style={{ backgroundColor: "#A11E56" }}>
                Lean Mass : {Number((this.state.lean_mass).toFixed(2))}
              </div>
              <div className="BFP_Val" style={{ backgroundColor: "#15C462" }}>
                Health : {this.state.health}
              </div>
              <button
                className="BFP_btn_calculate2"
                onClick={this.handleCalculateClick}
              >
                Reset
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
/*
bmi":20.2,"health":"Normal Weight","healthy_bmi_range":"18.5-24.9"
*/
