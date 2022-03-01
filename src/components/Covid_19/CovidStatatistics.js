import React, { Component } from 'react'
import axios from 'axios';
import './covidStats.css'
import VectorMap, {
    Export,
    Label,
    Layer,
    Legend,
    Source,
    Subtitle,
    Title,
    Tooltip,
    Size,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { countriesGDP } from './data.js';
import TooltipTemplate from './TooltipTemplate.js';
import CWD_Details from './Covid_19_comps/CWD_Details';

const colorGroups = [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000];
const mapBounds = [-180, 185, 280, -60];

const { format } = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
});

export default class CovidStatatistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gotData: false,
                width: 0,
                height: 0,
                windowWidth: window.innerWidth 
        }
        
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth })
        console.log("Window width "+this.state.windowWidth);
    };

    componentDidMount() {
            window.addEventListener("resize", this.handleResize);
            console.log("Window width "+this.state.windowWidth);
           }
          
    componentWillUnmount() {
            window.addEventListener("resize", this.handleResize);
           } 
    customizeLayer(elements) {
        elements.forEach((element) => {
            const country = countriesGDP[element.attribute('name')];
            if (country) {
              element.applySettings({
                color: country.color,
                hoveredColor: '#e0e000',
                selectedColor: '#008f00',
              });
            }
          });
    }

    customizeLegendText(arg) {
        return `${format(arg.start)} to ${format(arg.end)}`;
    }
    //1960
    render() {
        return (
            <div className='cwd_main'>
                {/* <h1 className='cwd_heading'>Country Wise Statistics</h1> */}
                <VectorMap
                    palette="Violet"
                    bounds={mapBounds}>
                    <Size height={800} width={this.state.windowWidth-89} />
                    <Layer
                        name="areas"
                        dataSource={mapsData.world}
                        colorGroups={colorGroups}
                        colorGroupingField="total"
                        customize={this.customizeLayer}
                        palette="violet"
                    >
                        <Label dataField="name" enabled={true} />
                    </Layer>
                    

                    {/* <Legend customizeText={this.customizeLegendText}>
                        <Source layer="areas" grouping="color" />
                    </Legend> */}

                    {/* <Title text="Country Wise Todays Data">
                        <Subtitle text="(Hover on Map Area)" />
                    </Title> */}

                    <Tooltip enabled={true}
                        contentRender={TooltipTemplate} />
                    <Export enabled={true} />
                </VectorMap>

                <CWD_Details/>

            </div>
        )
    }
}
