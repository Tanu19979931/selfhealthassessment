import React, { Component } from 'react';


// import Chart from 'react-google-charts'
// const geoData = [
//   ['Country', 'Popularity', 'Value'],
//   ['Germany', 200, 10],
//   ['United States', 300, 12],
//   ['Brazil', 400, 14],
//   ['Canada', 500, 15],
//   ['France', 600, 16],
//   ['RU', 700, 17],
//   ['India', 900, 18],
// ]
// export const options = {
//   // region: "002", // Africa
//   colorAxis: { colors: ["#00853f", "black", "#e31b23", "#EFF919", "#EB19F9", "#F91990", "#19F949"] },
//   backgroundColor: "#ffffff",
//   datalessRegionColor: "#f8bbd0",
//   defaultColor: "#f5f5f5",
//   tooltip:{textStyle: {color: '#FF0000', fontSize : 22}},
//   forceIFrame:true,
//   legend: "none",
//   magnifyingGlass :{enable:true, zoomFactor: 7.5}

// };
export default class CovidVaccine extends Component {

  render() {
    return <div>
         Vaccine Details
         <div>
        <h2>React Gauge Chart Example</h2>
        {/* <Chart
          width="100%"
          height="600px"
          chartType="GeoChart"
          data={geoData}
          options={options}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
          rootProps={{ 'data-testid': '1' }}
        /> */}
        
      </div>
    </div>;
  }
}
