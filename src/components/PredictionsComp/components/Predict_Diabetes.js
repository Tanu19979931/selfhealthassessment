import React, { Component } from 'react'
import "./predict_style.css";
import axios from "axios";

export default class Predict_Diabetes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Pregnancies: 0.0,
            Glucose: 0.0,
            BloodPressure: 0.0,
            SkinThickness: 0.0,
            Insulin: 0.0,
            BMI: 0.0,
            DiabetesPedigreeFunction: 0.0,
            Age: 0.0,
            loading : false,
            got_result: false,
            result: "",
        };
        this.handle_Di_pridict_click = this.handle_Di_pridict_click.bind(this);
      }

      async handle_Di_pridict_click(){
          console.log(this.state.Pregnancies+ " " + this.state.Glucose+ " " + this.state.BloodPressure+ " " + this.state.SkinThickness+ " "+ this.state.Insulin+ " " + this.state.BMI+ " "+ this.state.DiabetesPedigreeFunction+ " " + this.state.Age);
        var res = await axios.get("http://127.0.0.1:5000/");
        console.log(res.data);
        try{
        var res_pre = await axios.post(`http://127.0.0.1:5000/predict_diabeties?Pregnancies=${this.state.Pregnancies}&Glucose=${this.state.Glucose}&BloodPressure=${this.state.BloodPressure}&SkinThickness=${this.state.SkinThickness}&Insulin=${this.state.Insulin}&BMI=${this.state.BMI}&DiabetesPedigreeFunction=${this.state.DiabetesPedigreeFunction}&Age=${this.state.Age}`);
        console.log(res_pre);
        // if (res_pre.data === "1") {
        //   console.log("Positive");
        //   this.setState({loading: false, got_result : true , result : true})
        // } else {
        //   console.log("Negative");
        //   this.setState({loading: false, got_result : true , result : false})
        // }
        this.setState({loading: false, got_result : true , result : res_pre.data})
    }catch(err){
        console.log(err);
        this.setState({loading: false, got_result : false})
    }
      }
    
  render() {
    return (
      <div className='Di_container'><h1 className="Di_heading">Predict Diabetes</h1>
      <div className="Di_mid_cont">
        <div className="Di_rows">
          <div className="Di_input_divs">
            <label className="Di_lables">Pregnancies : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) => this.setState({ Pregnancies: e.target.value })}
            />
          </div>
          <div className="Di_input_divs">
            <label className="Di_lables">Glucose : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ Glucose: e.target.value })
              }
            />
          </div>
        </div>
        <div className="Di_rows">
          <div className="Di_input_divs">
            <label className="Di_lables">Blood Pressure : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ BloodPressure: e.target.value })
              }
            />
          </div>
          <div className="Di_input_divs">
            <label className="Di_lables">Skin Thickness : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ SkinThickness: e.target.value })
              }
            />
          </div>
        </div>
        <div className="Di_rows">
          <div className="Di_input_divs">
            <label className="Di_lables">Insulin : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ Insulin: e.target.value })
              }
            />
          </div>
          <div className="Di_input_divs">
            <label className="Di_lables">BMI : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ BMI: e.target.value })
              }
            />
          </div>
        </div>
        <div className="Di_rows">
          <div className="Di_input_divs">
            <label className="Di_lables">Diabetes Pedigree Function : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ DiabetesPedigreeFunction: e.target.value })
              }
            />
          </div>
          <div className="Di_input_divs">
            <label className="Di_lables">Age : </label>
            <input
              className="Di_inputs"
              placeholder="0.00"
              onChange={(e) =>
                this.setState({ Age: e.target.value })
              }
            />
          </div>
        </div>
        <div
            className="Di_predict_div"
            onClick={this.handle_Di_pridict_click}
          >
            PREDICT
          </div>

          {this.state.got_result && this.state.result == 'The person is diabetic' && (
            <div className="Di_result_div_pos">{this.state.result}</div>
          )}
          {this.state.got_result && this.state.result == 'The person is not diabetic' && (
            <div className="Di_result_div_neg">{this.state.result}</div>
          )}
        </div>
    </div>
    )
  }
}
