import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction'
class Login extends Component {
  state = {
    taiKhoan: '',
    matKhau: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // Sự kiện cản reload browser
    e.preventDefault();
    const action = dangNhapAction(this.state);
    // tốn khoảng tg api kiểm tra
    this.props.dispatch(action);
    // this.props.history.push
  }
  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className='from-group'>
          <p>Tài khoản</p>
          <input className='form-control' name='taiKhoan' onChange={this.handleChange}></input>
        </div>
        <div className='from-group'>
          <p>Mật khẩu</p>
          <input className='form-control' name='matKhau' onChange={this.handleChange}></input>
        </div>
        <div className='from-group'>
          <button type='submit' className='btn btn-success'>Đăng nhập</button>
        </div>
      </form>
    )
  }
}



export default connect()(Login)