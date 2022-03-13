import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

export default class Register extends Component {
  state = {
    submitted: true
    // taiKhoan: '',
    // hoTen: '',
    // matKhau: '',
    // email: '',
    // soDienThoai: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.setState({
      submitted: false
    })
    // Sự kiện cản reload browser
    e.preventDefault();
    
  }
  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Đăng ký</h3>
        <div className='from-group'>
          <p>Tài khoản</p>
          <input className='form-control' name='taiKhoan'></input>
        </div>
        <div className='from-group'>
          <p>Họ tên</p>
          <input className='form-control' name='hoTen'></input>
        </div>
        <div className='from-group'>
          <p>Mật khẩu</p>
          <input type='password' className='form-control' name='matKhau' ></input>
        </div>
        <div className='from-group'>
          <p>Email</p>
          <input className='form-control' name='email'></input>
        </div>
        <div className='from-group'>
          <p>Số điện thoại</p>
          <input className='form-control' name='soDienThoai'></input>
        </div>
        <div className='from-group'>
          <button type='submit' className='btn btn-success'>Đăng ký</button>
        </div>
        <Prompt 
          when={this.state.submitted}
          message={location => ('Bạn thực sự muốn rời khỏi trang?')}
        />
      </form>
    )
  }
}
