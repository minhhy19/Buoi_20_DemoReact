import React, {Component} from "react";
// import thư viên liên kết với store
import {connect} from "react-redux";

class CarItemRedux extends Component {
    render() {
        // console.log("props", this.props);
        let {item} = this.props;
        return (
            <div className="card">
                <img src={item.img} alt="..." />
                <div className="card-body">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelId"
                        onClick={() => {
                            this.props.viewDetail(item);
                        }}
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
        );
    }
}

// Hàm tạo ra các props là phương thức đưa dữ liệu đưa lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        viewDetail: (carDetail) => {
            // console.log(carDetail);
            const action = {
                // type: thuộc tính bắt buộc khi đưa dữ liệu lên redux
                type: 'XEM_CHI_TIET',
                carDetail: carDetail
            }
            // Dùng hàm dispatch đưa dữ liệu lên redux
            dispatch(action);
        },
    };
};

export default connect(null, mapDispatchToProps)(CarItemRedux);
