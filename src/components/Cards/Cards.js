import React, { Component } from 'react'
import './cards.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

class Cards extends Component {
    constructor(props){
        super();
        this.state ={

        }

    }
    render() {
        return (
            <div className='card'>
                
                    <img src={this.props.img} className='card__image'/>
                    <div className='card__body'>
                    <div className='card__title'>{this.props.title}</div>
                    <p className='card__description'>{this.props.description}</p>
                    <div className= 'card__btn__div'>
                    <div id='triangle-right'></div>
                        <Link className='link' to = {this.props.url}>
                        <button className='card__btn'>
                            {this.props.btnName}
                            </button> 
                            </Link>
                            <div id='triangle-left'></div>
                        
                    </div>                   

                </div>
                
            </div>
        )
    }
}
export default Cards
