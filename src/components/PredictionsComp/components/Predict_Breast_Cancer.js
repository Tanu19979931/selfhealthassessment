import React, { Component } from "react";
import "./predict_style.css";
import axios from "axios";
export default class Predict_Breast_Cancer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mean_radius: 0.0,
      mean_texture: 0.0,
      mean_perimeter: 0.0,
      mean_area: 0.0,
      mean_smoothness: 0.0,
      mean_compactness: 0.0,
      mean_concavity: 0.0,
      mean_concave_points: 0.0,
      mean_symmetry: 0.0,
      mean_fractal_dimension: 0.0,
      radius_error: 0.0,
      texture_error: 0.0,
      perimeter_error: 0.0,
      area_error: 0.0,
      smoothness_error: 0.0,
      compactness_error: 0.0,
      concavity_error: 0.0,
      concave_points_error: 0.0,
      symmetry_error: 0.0,
      fractal_dimension_error: 0.0,
      worst_radius: 0.0,
      worst_texture: 0.0,
      worst_perimeter: 0.0,
      worst_area: 0.0,
      worst_smoothness: 0.0,
      worst_compactness: 0.0,
      worst_concavity: 0.0,
      worst_concave_points: 0.0,
      worst_symmetry: 0.0,
      worst_fractal_dimension: 0.0,
      loading : false,
      got_result: false,
      result: false,
    };
    this.handle_PBC_pridict_click = this.handle_PBC_pridict_click.bind(this);
  }

  async handle_PBC_pridict_click() {
      this.setState({loading : true})
    console.log(
      this.state.mean_radius +
        this.state.mean_texture +
        this.state.mean_perimeter +
        this.state.mean_area +
        this.state.mean_smoothness +
        this.state.mean_compactness +
        this.state.mean_concavity +
        this.state.mean_concave_points +
        this.state.mean_symmetry +
        this.state.mean_fractal_dimension +
        this.state.radius_error +
        this.state.texture_error +
        this.state.perimeter_error +
        this.state.area_error +
        this.state.smoothness_error +
        this.state.compactness_error +
        this.state.concavity_error +
        this.state.concave_points_error +
        this.state.symmetry_error +
        this.state.fractal_dimension_error +
        this.state.worst_radius +
        this.state.worst_texture +
        this.state.worst_perimeter +
        this.state.worst_area +
        this.state.worst_smoothness +
        this.state.worst_compactness +
        this.state.worst_concavity +
        this.state.worst_concave_points +
        this.state.worst_symmetry +
        this.state.worst_fractal_dimension
    );
    var res = await axios.get("http://127.0.0.1:5000/");
    console.log(res.data);
    try{
    const d = {
      "mean radius": Number(this.state.mean_radius),
      "mean texture": Number(this.state.mean_texture),
      "mean perimeter": Number(this.state.mean_perimeter),
      "mean area": Number(this.state.mean_area),
      "mean smoothness": Number(this.state.mean_smoothness),
      "mean compactness": Number(this.state.mean_compactness),
      "mean concavity": Number(this.state.mean_concavity),
      "mean concave points": Number(this.state.mean_concave_points),
      "mean symmetry": Number(this.state.mean_symmetry),
      "mean fractal dimension": Number(this.state.mean_fractal_dimension),
      "radius error": Number(this.state.radius_error),
      "texture error": Number(this.state.texture_error),
      "perimeter error": Number(this.state.perimeter_error),
      "area error": Number(this.state.area_error),
      "smoothness error": Number(this.state.smoothness_error),
      "compactness error": Number(this.state.compactness_error),
      "concavity error": Number(this.state.concavity_error),
      "concave points error": Number(this.state.concave_points_error),
      "symmetry error": Number(this.state.symmetry_error),
      "fractal dimension error": Number(this.state.fractal_dimension_error),
      "worst radius": Number(this.state.worst_radius),
      "worst texture": Number(this.state.worst_texture),
      "worst perimeter": Number(this.state.worst_perimeter),
      "worst area": Number(this.state.worst_area),
      "worst smoothness": Number(this.state.worst_smoothness),
      "worst compactness": Number(this.state.worst_compactness),
      "worst concavity": Number(this.state.worst_concavity),
      "worst concave points": Number(this.state.worst_concave_points),
      "worst symmetry": Number(this.state.worst_symmetry),
      "worst fractal dimension": Number(this.state.worst_fractal_dimension),
    };

    var res_pre = await axios.post("http://127.0.0.1:5000/predict_BCancer", d);
    console.log(res_pre);
    if (res_pre.data === "1") {
      console.log("Positive");
      this.setState({loading: false, got_result : true , result : true})
    } else {
      console.log("Negative");
      this.setState({loading: false, got_result : true , result : false})
    }
}catch(err){
    console.log(err);
    this.setState({loading: false, got_result : false})
}
  }
  render() {
    return (
      <div className="PBC_container">
        <h1 className="PBC_heading">Predict Breast Cancer</h1>
        <div className="PCB_mid_cont">
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean radius : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ mean_radius: e.target.value })}
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean texture : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_texture: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean perimeter : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_perimeter: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean area : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ mean_area: e.target.value })}
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean smoothness : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_smoothness: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean compactness : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_compactness: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean concavity : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_concavity: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean concave points : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_concave_points: e.target.value })
                }
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean symmetry : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_symmetry: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Mean fractal dimension : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ mean_fractal_dimension: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Radius error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ radius_error: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Texture error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ texture_error: e.target.value })
                }
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Perimeter error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ perimeter_error: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Area error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ area_error: e.target.value })}
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Smoothness error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ smoothness_error: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Compactness error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ compactness_error: e.target.value })
                }
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Concavity error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ concavity_error: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Concave points error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ concave_points_error: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Symmetry error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ symmetry_error: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Fractal dimension error : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ fractal_dimension_error: e.target.value })
                }
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst radius : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_radius: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst texture : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_texture: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst perimeter : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_perimeter: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst area : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ worst_area: e.target.value })}
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst smoothness : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_smoothness: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst compactness : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_compactness: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst concavity : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_concavity: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst concave points : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_concave_points: e.target.value })
                }
              />
            </div>
          </div>
          <div className="PCB_rows">
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst symmetry : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_symmetry: e.target.value })
                }
              />
            </div>
            <div className="PCB_input_divs">
              <label className="PCB_lables">Worst fractal dimension : </label>
              <input
                className="PCB_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ worst_fractal_dimension: e.target.value })
                }
              />
            </div>
          </div>
          <div
            className="PCB_predict_div"
            onClick={this.handle_PBC_pridict_click}
          >
            PREDICT
          </div>

          {this.state.got_result && this.state.result && (
            <div className="PCB_result_div_pos">
              You are suffring from Breast Cancer according to Prediction{" "}
            </div>
          )}
          {this.state.got_result && this.state.result == false && (
            <div className="PCB_result_div_neg">
              You not are suffring from Breast Cancer according to Prediction{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}
