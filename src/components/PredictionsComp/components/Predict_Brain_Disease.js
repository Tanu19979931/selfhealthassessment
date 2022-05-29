import React, { Component } from 'react'
import "./predict_style.css";
import axios from 'axios';
export default class Predict_Brain_Disease extends Component {

    constructor(props){
        super(props);
        this.state = {
            MDVP_Fo_Hz : 0.0,
            MDVP_Fhi_Hz : 0.0,
            MDVP_Flo_Hz : 0.0,
            MDVP_Jitter_Per : 0.0,
            MDVP_Jitter_Abs : 0.0,
            MDVP_RAP : 0.0,
            MDVP_PPQ : 0.0,
            Jitter_DDP : 0.0,
            MDVP_Shimmer : 0.0,
            MDVP_Shimmer_dB : 0.0,
            Shimmer_APQ3 : 0.0,
            Shimmer_APQ5 : 0.0,
            MDVP_APQ : 0.0,
            Shimmer_DDA : 0.0,
            NHR : 0.0,
            HNR : 0.0,
            RPDE : 0.0,
            DFA : 0.0,
            spread1 : 0.0,
            spread2 : 0.0,
            D2 : 0.0,
            PPE : 0.0,
            loading : false,
            got_result: false,
            result: "",
            };
            this.handle_BD_pridict_click = this.handle_BD_pridict_click.bind(this);
        }
        async handle_BD_pridict_click() {
          // this.setState({loading : true})
        console.log(
          this.state.MDVP_Fo_Hz +
            this.state.MDVP_Fhi_Hz +
            this.state.MDVP_Flo_Hz +
            this.state.MDVP_Jitter_Per +
            this.state.MDVP_Jitter_Abs +
            this.state.MDVP_RAP +
            this.state.MDVP_PPQ +
            this.state.Jitter_DDP +
            this.state.MDVP_Shimmer +
            this.state.MDVP_Shimmer_dB +
            this.state.Shimmer_APQ3 +
            this.state.Shimmer_APQ5 +
            this.state.MDVP_APQ +
            this.state.Shimmer_DDA +
            this.state.NHR +
            this.state.HNR +
            this.state.RPDE +
            this.state.DFA +
            this.state.spread1 +
            this.state.spread2 +
            this.state.D2 +
            this.state.PPE
        );
        var res = await axios.get("http://127.0.0.1:5000/");
        console.log(res.data);
        try{
        const bd_data = {
          "MDVP:Fo(Hz)": Number(this.state.MDVP_Fo_Hz),
          "MDVP:Fhi(Hz)": Number(this.state.MDVP_Fhi_Hz),
          "MDVP:Flo(Hz)": Number(this.state.MDVP_Flo_Hz),
          "MDVP:Jitter(%)": Number(this.state.MDVP_Jitter_Per),
          "MDVP:Jitter(Abs)": Number(this.state.MDVP_Jitter_Abs),
          "MDVP:RAP": Number(this.state.MDVP_RAP),
          "MDVP:PPQ": Number(this.state.MDVP_PPQ),
          "Jitter:DDP": Number(this.state.Jitter_DDP),
          "MDVP:Shimmer": Number(this.state.MDVP_Shimmer),
          "MDVP:Shimmer(dB)": Number(this.state.MDVP_Shimmer_dB),
          "Shimmer:APQ3": Number(this.state.Shimmer_APQ3),
          "Shimmer:APQ5": Number(this.state.Shimmer_APQ5),
          "MDVP:APQ": Number(this.state.MDVP_APQ),
          "Shimmer:DDA": Number(this.state.Shimmer_DDA),
          "NHR": Number(this.state.NHR),
          "HNR": Number(this.state.HNR),
          "RPDE": Number(this.state.RPDE),
          "DFA": Number(this.state.RPDE),
          "spread1": Number(this.state.spread1),
          "spread2": Number(this.state.spread2),
          "D2": Number(this.state.D2),
          "PPE": Number(this.state.PPE)
        };
    
        var res_pre = await axios.post("http://127.0.0.1:5000/predict_brain_disease", bd_data);
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
      <div className="BD_container">
        <h1 className="BD_heading">Predict Brain Disease</h1>
        <div className="BD_mid_cont">
          <div className="BD_rows">
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Fo(Hz) : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ MDVP_Fo_Hz : e.target.value })}
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Fhi(Hz) :  </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_Fhi_Hz:  e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Flo(Hz) : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_Flo_Hz: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Jitter(%) : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ MDVP_Jitter_Per: e.target.value })}
              />
            </div>
          </div>
          <div className="BD_rows">
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Jitter(Abs) : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({  MDVP_Jitter_Abs: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:RAP : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_RAP: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:PPQ" : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_PPQ: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">Jitter:DDP : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ Jitter_DDP: e.target.value })
                }
              />
            </div>
          </div>
          <div className="BD_rows">
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Shimmer : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_Shimmer: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:Shimmer(dB) : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_Shimmer_dB: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">Shimmer:APQ3 : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ Shimmer_APQ3: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">Shimmer:APQ5 : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ Shimmer_APQ5: e.target.value })
                }
              />
            </div>
          </div>
          <div className="BD_rows">
            <div className="BD_input_divs">
              <label className="BD_lables">MDVP:APQ : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ MDVP_APQ: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">Shimmer:DDA : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) => this.setState({ Shimmer_DDA: e.target.value })}
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">NHR : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ NHR: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">HNR : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ HNR: e.target.value })
                }
              />
            </div>
          </div>
          <div className="BD_rows">
            <div className="BD_input_divs">
              <label className="BD_lables">RPDE : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ RPDE: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">DFA : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({  DFA: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">spread1 : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ spread1: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">spread2 : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({ spread2: e.target.value })
                }
              />
            </div>
          </div>
          <div className="BD_rows">
            <div className="BD_input_divs">
              <label className="BD_lables">D2 : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({  D2: e.target.value })
                }
              />
            </div>
            <div className="BD_input_divs">
              <label className="BD_lables">PPE : </label>
              <input
                className="BD_inputs"
                placeholder="0.00"
                onChange={(e) =>
                  this.setState({  PPE: e.target.value })
                }
              />
            </div>
          </div>
          
          
          <div
            className="BD_predict_div"
            onClick={this.handle_BD_pridict_click}
          >
            PREDICT
          </div>

          {this.state.got_result && this.state.result && (
            <div className="BD_result_div_pos">
              You are suffring from Brain Disease according to Prediction{" "}
            </div>
          )}
          {this.state.got_result && this.state.result == false && (
            <div className="BD_result_div_neg">
              You not are suffring from Brain Disease according to Prediction{" "}
            </div>
          )}
        </div>
      </div>
      
    );
  }
}
