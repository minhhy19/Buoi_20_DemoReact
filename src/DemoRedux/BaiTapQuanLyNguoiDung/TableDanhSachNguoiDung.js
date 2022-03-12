import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class TableDanhSachNguoiDung extends Component {
    state = {
        sortBy: 'taiKhoan'
    }

    handleSort = (name) => {
        this.setState({
            sortBy: name
        },
            // console.log(this.state.sortBy)
        )
    }
  render() {
    let {mangNguoiDung} = this.props;
    mangNguoiDung = _.sortBy(mangNguoiDung, [this.state.sortBy]);
    // console.log(mangNguoiDung);
    return (
        <div className='card'>
            <div className='card-header bg-primary text-white'>Danh sách người dùng</div>
            <table className='table'>
                <thead>
                    <tr className='bg-dark text-white'>
                        <th>STT</th>
                        <th style={{cursor:'pointer'}} onClick={() => {this.handleSort('taiKhoan')}}>Tài khoản</th>
                        <th style={{cursor:'pointer'}} onClick={() => {this.handleSort('hoTen')}}>Họ tên</th>
                        <th style={{cursor:'pointer'}} onClick={() => {this.handleSort('matKhau')}}>Mật khẩu</th>
                        <th style={{cursor:'pointer'}} onClick={() => {this.handleSort('email')}}>Email</th>
                        <th style={{cursor:'pointer'}} onClick={() => {this.handleSort('soDienThoai')}}>Số điện thoại</th>
                        <th style={{cursor:'pointer'}} onClick={() => {this.handleSort('soDienThoai')}}>Loại người dùng</th>
                        <th></th>
                    </tr>    
                </thead>   
                <tbody>
                    {mangNguoiDung.map((nguoiDung, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>    
                            <td>{nguoiDung.taiKhoan}</td>    
                            <td>{nguoiDung.hoTen}</td>    
                            <td>{nguoiDung.matKhau}</td>    
                            <td>{nguoiDung.email}</td>    
                            <td>{nguoiDung.soDienThoai}</td>    
                            <td>{nguoiDung.loaiNguoiDung === '1' ? 'Người dùng' : 'Quản trị'}</td>    
                            <td>
                                <button className='btn btn-danger' onClick={() => {
                                    const action = {
                                        type: 'XOA_NGUOI_DUNG',
                                        taiKhoan: nguoiDung.taiKhoan
                                    };
                                    this.props.dispatch(action);
                                }}>Xóa</button>
                                <button className='btn btn-primary ml-2' onClick={() => {
                                    const action = {
                                        type: 'SUA_NGUOI_DUNG',
                                        nguoiDung: nguoiDung
                                    }

                                    this.props.dispatch(action);
                                }}>Chỉnh sửa</button>
                            </td>    
                        </tr>
                    })}    
                </tbody> 
            </table>
        </div>
    )
  }
}

// rcredux: Tạo ra component có kết nối vs redux

const mapStateToProps = (rootReducer) => ({
    mangNguoiDung: rootReducer.baiTapQuanLyNguoiDungReducer.mangNguoiDung
});

export default connect(mapStateToProps) (TableDanhSachNguoiDung);