import React, {Component} from "react";

export default class EventHandleRCC extends Component {
    showMess = function () {
        alert("hello Hy");
    };

    showInfo = function (name) {
        alert('hello ! ' + name);
    }

    render() {
        const handleClick = function () {
            console.log(123);
        }
        return (
            <div className="container">
                <button id="btnShowMess" onClick={handleClick}>
                    show message
                </button>
                <button onClick={this.showInfo.bind(this, 'Hy')}>Click me</button>
                <button onClick={() => {
                    this.showInfo('Hy')
                }}>Click me!</button>
            </div>
        );
    }
}
