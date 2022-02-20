import React, {Component} from "react";

export default class BaiTapTangGiamFont extends Component {
    state = {
        fontSize: 17
    };

    changeFontSize = fSize => {
        this.setState({
            fontSize: this.state.fontSize + fSize
        });
    };

    render() {
        return (
            <div className="container">
                <h3
                    style={{
                        fontSize: `${this.state.fontSize}px`,
                    }}
                >
                    Bài tập tăng giảm font size
                </h3>
                <button onClick={() => {
                    this.changeFontSize(1)
                }} className="btn btn-outline-primary">+</button>
                <button onClick={() => {
                    this.changeFontSize(-1)
                }} className="btn btn-outline-primary ml-2">-</button>
            </div>
        );
    }
}
