import React from 'react';
import {

} from 'reactstrap';
import Search from '../Search';

export default class Products extends React.Component {

getData(){
 this.lamps = require("../lamps.json");
} 


  rerender(){
    this.setState({ state: this.state });
  }

  render(){
    this.getData();
    return <div>
          < Search />
          
          <div className="lamps">
          {this.lamps.map((lamp) => {
            return <div className="product clearfix">
              <img src={lamp.image} alt=""/>
              <div className="content">
                <h2>{lamp.name}</h2>
                <p>{lamp.description}</p>
                <button data-click="buy">Köp för {lamp.cost} kr</button>
              </div>
            </div>
          })}
            
          </div>
    </div>
  }
}