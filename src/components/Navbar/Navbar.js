import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar2.css'
import { Button } from '../Button';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// const LOGO = require('../../assets/logo.png');
import LOGO from '../../assets/logo.png'
import MENU from '../../assets/menu.png'
import { Outlet, Link } from "react-router-dom";
// const SHA_Logo = require('../../assets/SHA_Logo1.png')
class Navbar extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            clicked: false
        }
    }
    navSlide = () => {

        const menu = document.querySelector('.menu');
        const nav = document.querySelector('nav__links')
        menu.addEventListener('click', () => {
            console.log("clicked");
            this.setState({
                clicked: !this.state.clicked
            })
            console.log(this.state.clicked);
            //  nav.classList('nav__active')
        })
    }
    componentDidMount() {
        this.navSlide();
    }
    render() {
        return (

            <nav className='nav_bar'>
                <div className='menu_div'>
                    <img class="menu" src={MENU} alt="logo" />
                </div>
                <div className='_shadiv'>
                    <div className='_sha'>SHA</div>

                    <img class="logo" src={LOGO} alt="logo" />
                </div>
                <ul className={this.state.clicked ? 'nav__active' : 'nav__links'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}

                </ul>
                <a class="cta" href="#"><button>Sign Up</button></a>


            </nav>
        )
    }
}
export default Navbar;