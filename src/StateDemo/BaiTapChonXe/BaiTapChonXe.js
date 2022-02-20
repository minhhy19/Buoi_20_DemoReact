import React, {Component} from "react";

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: "./img/products/black-car.jpg",
    };

    changeColor = color => {
        this.setState({
            imgSrc: `./img/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập chọn màu xe</h3>
                <div className="row">
                    <div className="col-6">
                        <img
                            className="w-100"
                            src={this.state.imgSrc}
                            alt="..."
                        />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button
                                    onClick={() => {
                                        this.setState({
                                            imgSrc: "./img/products/black-car.jpg",
                                        });
                                    }}
                                    style={{color: "black"}}
                                >
                                    Black Car
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    onClick={() => {
                                        this.setState({
                                            imgSrc: "./img/products/steel-car.jpg",
                                        });
                                    }}
                                    style={{color: "gray"}}
                                >
                                    Steel Car
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    onClick={() => {
                                        this.changeColor('silver');
                                    }}
                                    style={{color: "silver"}}
                                >
                                    Silver Car
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    onClick={() => {
                                        this.changeColor('red');
                                    }}
                                    style={{color: "red"}}
                                >
                                    Red Car
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
