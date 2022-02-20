import React, {Component} from "react";

export default class LoginForm extends Component {

    /**
     * State là thuộc tính có sẵn của react class
     * component, chứa các giá trị thay đổi trên giao
     * diện khi ng dùng thao tác
     */
    state = {
        login: false
    }
    
    userName = "Nguyễn Văn A";

    renderFormLogin = () => {
        if(this.state.login) {
            return <div>
                Hello {this.userName}
            </div>
        }
        return <button onClick={this.handleLogin}>Đăng nhập</button>
    }

    handleLogin = () => {
        /**
         * setState là phương thức có sẵn của react class 
         * component. Nhận vào tham số là 1 state mới
         * + Thay đổi các giá trị của state = state mới
         * + Render lại giao diện
         * + setState là 1 phương thức bất đồng bộ
         */
        this.setState({
            login: true
        }, () => {
            console.log(this.state.login);
        })
    }

    render() {
        return (
            <div className="container">
                {/* {this.state.login ? (
                    <div>Hello {this.userName}</div>
                ) : (
                    <button>Đăng nhập</button>
                )} */}
                {this.renderFormLogin()}
            </div>
        );
    }
}
