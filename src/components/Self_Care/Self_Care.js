import React, { Component } from 'react'
import Cards from '../Cards/Cards'
import {SelfCareItems} from './components/Self_Care_Items'
 
export default class Self_Care extends Component {
  render() {
    return (
        <div className="wrapper">
        {SelfCareItems.map((item, index) => {
            return (
                <Cards
                    key={index}
                    img={item.image}
                    title={item.title}
                    description={item.des}
                    btnName ={"View"}
                    url = {item.url}
                />
            )
        })}
       
    </div>
    )
  }
}
