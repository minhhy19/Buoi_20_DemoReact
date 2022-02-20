import React, { Component } from 'react'

export default class HandlingEvent extends Component {
  handleSayHello = () => {
    console.log("hello");
  }
  handleSayName = name => console.log('hi ' + name);
  render() {
    return (
      <div>
        <button onClick={this.handleSayHello}>
          Say Hello
        </button>
        <button style={{
          marginLeft: "5px"
        }} onClick={() => {
          this.handleSayName('Hy');
          this.handleSayHello();
        }}>Hi + name</button>
      </div>
    )
  }
}
