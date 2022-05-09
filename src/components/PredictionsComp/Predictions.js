import React, { Component } from 'react'
import Cards from '../Cards/Cards';
import '../Cards/cards.css'
import { CardsItems } from './CardsItems'
import axios from 'axios';

class Predictions extends Component {
    async componentDidMount(){
        // var res = await axios.get('http://127.0.0.1:5000/')
        // console.log(res.data);

        // const d = {
        //     "mean radius": 0.1 ,
        //     "mean texture": 0.1 ,
        //     "mean perimeter": 0.1 ,
        //     "mean area": 0.1 ,
        //     "mean smoothness": 0.1 ,
        //     "mean compactness": 0.1 , 
        //     "mean concavity": 0.1 ,
        //     "mean concave points": 0.1 , 
        //     "mean symmetry": 0.1 ,
        //     "mean fractal dimension": 0.1 ,
        //     "radius error": 0.1 ,
        //     "texture error": 0.1 , 
        //     "perimeter error": 0.1 , 
        //     "area error": 0.1 ,
        //     "smoothness error": 0.1 ,
        //     "compactness error": 0.1 , 
        //     "concavity error": 0.1 ,
        //     "concave points error": 0.1 ,
        //     "symmetry error": 0.1 ,
        //     "fractal dimension error": 0.1 ,
        //     "worst radius": 0.1 ,
        //     "worst texture": 0.1 ,
        //     "worst perimeter": 0.1 ,
        //     "worst area": 0.1 ,
        //     "worst smoothness": 0.1 ,
        //     "worst compactness": 0.1 ,
        //     "worst concavity": 0.1 ,
        //     "worst concave points": 0.1 ,
        //     "worst symmetry": 0.1 ,
        //     "worst fractal dimension": 0.1 
        // }       

        // var res_pre = await axios.post('http://127.0.0.1:5000/predict_BCancer', d)
        // console.log(res_pre);
        // if(res_pre.data === "1"){
        //     console.log("Positive");
        // }else{
        //     console.log("Negative");
        // }
    }
    render() {
        return (
            <>
                <div className='headings_prediction_div'>
                    Try Some of the availiable predictions!!
                </div>
                <div className="wrapper">
                    {CardsItems.map((item, index) => {
                        return (
                            <Cards
                            key={index}
                                img={item.img}
                                title={item.title}
                                description={item.description}
                                btnName ={"Predict"}
                                url = {item.url}
                            />
                        )
                    })}
                   
                </div>
            </>
        )
    }
}
export default Predictions;
