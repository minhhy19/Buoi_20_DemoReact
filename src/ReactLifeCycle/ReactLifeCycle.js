import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            like: 0
        }
         console.log('constructor');
         
    }

    static getDerivedStateFromProps(nesProps, currentState) { // Nhận vaò props mới trước khi render và state hiện tại 
        console.log('getDerivedStateFromProps')
        return currentState;
    }

    shouldComponentUpdate(newProps, newState) {
        //shouldComponentUpdate: quyết định render hoặc k render lại component

        console.log('shouldComponentUpdate');
        console.log('this.state', this.state);
        console.log('newState', newState);
        return true;
    }

  render() {
      console.log('render');
    return (
        <div className='container'>
            <h3>Number: {this.state.number}</h3>
            <h3>Like: {this.state.like}</h3>
            <button className='btn btn-success' onClick={() => {
                this.setState({
                    number: this.state.number + 1
                });
            }}>+</button>
            <hr />
            <button className='btn btn-danger' onClick={() => {
                this.setState({
                    like: this.state.like + 1
                })
            }}>like</button>
            <hr />
            <h3>ChildComponent</h3>
            {this.state.number > 3 ? '' : <ChildComponent number={this.state.number}/>}
        </div>
    )
  }

  componentDidMount() {
      console.log('componentDidMount');
  }

  componentWillUnmount() {
      // clear các hàm chạy ngầm hoặc các sự kiện addEventListener
  }
}
