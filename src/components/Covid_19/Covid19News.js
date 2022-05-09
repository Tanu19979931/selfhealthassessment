import React, { Component } from "react";
import axios from "axios";
import Loader from "react-js-loader";

const Background = require("../../assets/NoData.jpg");
export default class Covid19News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsData: [],
      isLoaded: false,
      gotData: true,
    };
  }

  async componentDidMount() {
    try {
      let response = await axios.get(
        `https://covid-news2.p.rapidapi.com/news`,
        {
          headers: {
            "X-RapidAPI-Host": "covid-news2.p.rapidapi.com",
            "X-RapidAPI-Key":
              "c157938e4dmsh775aa8ed7b66e5cp147a90jsnea10016d33f1",
          },
        }
      );
      console.log("useeff  " + response.data[0].title);
      console.log("useeff  " + response.data[2].title);
      this.setState({ NewsData: response.data, isLoaded: true });
      // console.log("useeff  " + JSON.stringify(response.data[1]));
    } catch (err) {
      console.log(err);
      this.setState({ gotData: false });
    }
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {
    return (
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        {this.state.isLoaded && this.state.gotData && (
          <div>
            {this.state.NewsData.map((item, index) => {
              console.log(item);
              var title =
                String(item.title).charAt(0).toUpperCase() +
                String(item.title).slice(1);
              var clr = this.getRandomColor();
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: clr,
                    marginTop: "20px",
                    height: "80px",
                    marginInline: "14px",
                    fontSize: "18px",
                    borderRadius: "10px",
                    paddingInline: "15px",
                    paddingTop: "25px",
                    color: "#fcfcfc",
                    fontWeight: "bolder",
                  }}
                  onClick={() => (window.location.href = item.url)}
                >
                  {" "}
                  {title}{" "}
                </div>
              );
            })}
          </div>
        )}
        {this.state.isLoaded == false && (
          <div style={styles.logo}>
            <Loader
              type="box-rotate-y"
              bgColor={"#0000ff"}
              title={"box-up"}
              color={"#FFFFFF"}
              size={100}
            />
          </div>
        )}
        {this.state.gotData == false && this.state.isLoaded && (
          <div
            style={{
              backgroundImage: `url(${Background})`,
              width: "100%",
              height: "100vh",
              backgroundSize : "contain"
            }}
          ></div>
        )}
      </div>
    );
  }
}
const styles = {
  logo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%,  -50%)`,
  },
};
