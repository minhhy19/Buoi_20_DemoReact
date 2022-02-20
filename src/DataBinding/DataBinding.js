import React, {Component} from "react";

export default class DataBinding extends Component {
    productName = "Samsung note 20";
    renderDetail = () => {
        return "BlackBerry is a line of smartphones, tablets, and services originally designed";
    }
    render() {
        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                    <div className="container">
                        <div className="card bg-light" style={{width: 300}}>
                            <img
                                className="card-img-top"
                                src="./img/sp_blackberry.png"
                                alt="Card image"
                                style={{maxWidth: "100%", height: 250}}
                            />
                            <div className="card-body text-center">
                                <h4 className="card-title text-center">
                                    {this.productName}
                                </h4>
                                <p className="card-text">
                                    {this.renderDetail()}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Detail
                                </a>
                                <a href="#" className="btn btn-danger">
                                    Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Hello</div>
            </React.Fragment>
        );
    }
}
