import React, { Component } from "react";
import "./predict_style.css";
import axios from "axios";
export default class Predict_Heart_Disease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0.0,
      sex: 0.0,
      cp: 0,
      trestbps: 0,
      chol: 0,
      fbs: 0,
      restecg: 0,
      thalach: 0,
      exang: 0,
      oldpeak: 0,
      slope: 0,
      ca: 0,
      thal: 0,
      loading: false,
      got_result: false,
      result: "",
      value0fsex: "0",
      valueofcp: "0",
      valueoffbs: "0",
      valueofrestecg: "0",
      valueofexang: "0",
      valueofslope: "0"
    };
    this.handle_HD_pridict_click = this.handle_HD_pridict_click.bind(this);
  }
  async handle_HD_pridict_click() {
    // this.setState({loading : true})
    console.log(
      this.state.age +
        this.state.sex +
        this.state.cp +
        this.state.trestbps +
        this.state.chol +
        this.state.fbs +
        this.state.restecg +
        this.state.thalach +
        this.state.exang +
        this.state.oldpeak +
        this.state.slope +
        this.state.ca +
        this.state.thal
    );
    var res = await axios.get("http://127.0.0.1:5000/");
    console.log(res.data);
    try {
      var res_pre = await axios.post(
        `http://127.0.0.1:5000/predict_heart_disease?age=${this.state.age}&sex=${this.state.sex}&cp=${this.state.cp}&trestbps=${this.state.trestbps}&chol=${this.state.chol}&fbs=${this.state.fbs}&restecg=${this.state.restecg}&thalach=${this.state.thalach}&exang=${this.state.exang}&oldpeak=${this.state.oldpeak}&slope=${this.state.slope}&ca=${this.state.ca}&thal=${this.state.thal}`
      );
      console.log(res_pre);
      if (res_pre.data === "1") {
        console.log("Positive");
        this.setState({ loading: false, got_result: true, result: true });
      } else {
        console.log("Negative");
        this.setState({ loading: false, got_result: true, result: false });
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, got_result: false });
    }
  }
  render() {
    console.log("val  " + this.state.value0fsex);
    return (
      <div className="HD_container">
        <h1 className="HD_heading">Predict Heart Disease</h1>
        <div className="HD_mid_cont">
          <div className="HD_rows">
            <div className="HD_input_divs">
              <label className="HD_lables">Age : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ age: e.target.value })}
              />
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">Sex : </label>
              {/* <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ sex:  e.target.value })
                }
              /> */}
              <select
                className="HD_inputs"
                value={this.state.value0fsex}
                onChange={(e) =>
                  this.setState({
                    value0fsex: e.target.value,
                    sex: e.target.value,
                  })
                }
              >
                <option value="1" style={{ color: "#000000" }}>
                  Male
                </option>
                <option value="0" style={{ color: "#000000" }}>
                  Female
                </option>
              </select>
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">Chest Pain Type : </label>
              {/* <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ cp: e.target.value })
                }
              /> */}
              <select
                className="HD_inputs"
                value={this.state.valueofcp}
                onChange={(e) =>
                  this.setState({
                    valueofcp: e.target.value,
                    cp: e.target.value,
                  })
                }
              >
                <option value="0" style={{ color: "#000000" }}>
                  Typical
                </option>
                <option value="1" style={{ color: "#000000" }}>
                  Typical angina
                </option>
                <option value="2" style={{ color: "#000000" }}>
                  Non-anginal pain
                </option>
                <option value="3" style={{ color: "#000000" }}>
                  Asymptomatic
                </option>
              </select>
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">trestbps : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ trestbps: e.target.value })}
              />
            </div>
          </div>
          <div className="HD_rows">
            <div className="HD_input_divs">
              <label className="HD_lables">cholestrol : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ chol: e.target.value })}
              />
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">fasting blood sugar : </label>
              {/* <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ fbs: e.target.value })
                }
              /> */}
              <select
                className="HD_inputs"
                value={this.state.valueoffbs}
                onChange={(e) =>
                  this.setState({
                    valueoffbs: e.target.value,
                    fbs: e.target.value,
                  })
                }
              >
                <option value="0" style={{ color: "#000000" }}>
                  False
                </option>
                <option value="1" style={{ color: "#000000" }}>
                  True
                </option>
              </select>
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">resting ecg : </label>
              {/* <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ restecg: e.target.value })
                }
              /> */}
              <select
                className="HD_inputs"
                value={this.state.valueofrestecg}
                onChange={(e) =>
                  this.setState({
                    valueofrestecg: e.target.value,
                    restecg: e.target.value,
                  })
                }
              >
                <option value="0" style={{ color: "#000000" }}>
                  Normal
                </option>
                <option value="1" style={{ color: "#000000" }}>
                  Abnormality in ST-T wave
                </option>
                <option value="2" style={{ color: "#000000" }}>
                  Left ventricular hypertrophy (Nominal)
                </option>
              </select>
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">thalach : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ thalach: e.target.value })}
              />
            </div>
          </div>
          <div className="HD_rows">
            <div className="HD_input_divs">
              <label className="HD_lables">exercise angina : </label>
              {/* <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ exang: e.target.value })}
              /> */}
              <select
                className="HD_inputs"
                value={this.state.valueofexang}
                onChange={(e) =>
                  this.setState({
                    valueofexang: e.target.value,
                    exang: e.target.value,
                  })
                }
              >
                <option value="0" style={{ color: "#000000" }}>
                  NO
                </option>
                <option value="1" style={{ color: "#000000" }}>
                  YES
                </option>
              </select>
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">oldpeak : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ oldpeak: e.target.value })}
              />
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">ST slope : </label>
              {/* <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ slope: e.target.value })}
              /> */}
              <select
                className="HD_inputs"
                value={this.state.valueofslope}
                onChange={(e) =>
                  this.setState({
                    valueofslope: e.target.value,
                    slope: e.target.value,
                  })
                }
              >
                <option value="0" style={{ color: "#000000" }}>
                Normal
                </option>
                <option value="1" style={{ color: "#000000" }}>
                Upsloping
                </option>
                <option value="2" style={{ color: "#000000" }}>
                Flat
                </option>
                <option value="3" style={{ color: "#000000" }}>
                Downsloping
                </option>
              </select>
            </div>
            <div className="HD_input_divs">
              <label className="HD_lables">ca : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ ca: e.target.value })}
              />
            </div>
          </div>
          <div className="HD_rows">
            <div className="HD_input_divs">
              <label className="HD_lables">thal : </label>
              <input
                className="HD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ thal: e.target.value })}
              />
            </div>
          </div>

          <div
            className="HD_predict_div"
            onClick={this.handle_HD_pridict_click}
          >
            PREDICT
          </div>

          {this.state.got_result && this.state.result && (
            <div className="HD_result_div_pos">
              You are suffring from Brain Disease according to Prediction{" "}
            </div>
          )}
          {this.state.got_result && this.state.result == false && (
            <div className="HD_result_div_neg">
              You not are suffring from Brain Disease according to Prediction{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}
