import React, { Component } from 'react'
import Cards from '../Cards/Cards';
import '../Cards/cards.css'
import { CardsItems } from './CardsItems'

class Predictions extends Component {
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
