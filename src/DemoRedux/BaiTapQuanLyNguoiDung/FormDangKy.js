// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import _ from 'lodash';
// class FormDangKy extends Component {
//     state = {
//         values: {
//             taiKhoan: '',
//             hoTen: '',
//             matKhau: '',
//             email: '',
//             soDienThoai: '',
//             loaiNguoiDung: '1', // Dữ liệu trường select bắt buộc phải có kể cả ng dùngchưa chọn
//         },
//         errors: {
//             taiKhoan: '',
//             hoTen: '',
//             matKhau: '',
//             email: '',
//             soDienThoai: ''
//         }
//     }

//     handleChangeInput = (event) => {
//         let {name, value, type} = event.target;
//         let newValues = {...this.state.values};
//         // Cập nhật values cho object values
//         newValues[name] = value;

//         let newErrors = {...this.state.errors};
//         let errorMess = '';
//         if( value === '') {
//             errorMess = name + ' không được bỏ trống !';
//         }
//         if (type === 'email') {
//             let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//             if (!regexEmail.test(value)) {
//                 errorMess = name + ' không đúng định dạng!';
//             }
//         }

//         newErrors[name] = errorMess;
        
//         // Xử lý xong values và errors sẽ cập nhật state cho 2 thuộc tính này
//         this.setState({
//             values: newValues,
//             errors: newErrors
//         }, () => {
//             // console.log(this.state)
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();// Phương thức cản sự kiện reload của browser
//         // Kiểm tra hợp lệ
//         let {values, errors} = this.state;
        
//         // Duyệt các giá trị của values
//         for (let key in values) {
//             if (values[key] === '') {
//                 alert('Thông tin chưa hợp lệ!');
//                 return;
//             }
//         }

//         for (let key in errors) {
//             if (errors[key] !== '') {
//                 alert('Thông tin chưa hợp lệ!');
//                 return;
//             }
//         }

//         // Khi thông tin form đã hợp lệ => đưa dữ liệu lên redux
//         const action = {
//             type: 'THEM_NGUOI_DUNG',
//             nguoiDung: this.state.values
//         }
//         // Gửi dữ liệu lên reducer
//         this.props.dispatch(action);
//     }

//     // Hàm này đang được gọi bới handleChange(setState)
//     // Hàm này đang được gọi khi bấm nút sửa (newProps)
//     // Làm sao biết dc khi nào bấm chỉnh sửa thì cần setState
//     // Khi nào k bấm chỉnh sửa mà cần change input
//     // static getDerivedStateFromProps(newProps, currentState) { // Nhận vaò props mới trước khi render và state hiện tại 
//     //     // Hàm này sẽ chạy trước khi giao diện thay đổi (nhận vào props mới và state hiện tại)
//     //     // => Lấy props từ redux gán vào state của component
//     //     if (newProps.nguoiDungSua.taiKhoan !== currentState.values.taiKhoan) {
//     //         currentState = {
//     //             ...currentState,
//     //             values: newProps.nguoiDungSua
//     //         }
//     //     }
        
//     //     return currentState;
//     // }

//     // Hàm này chỉ chạy khi props thay đổi
//     componentWillReceiveProps(newProps) {
//         // trước khi render và sau khi props thay đổi thì gán props vào state
//         this.setState({
//             values: newProps.nguoiDungSua
//         })
//     }

//   render() {
//       let {taiKhoan, hoTen, soDienThoai, email, matKhau, loaiNguoiDung} = this.props.nguoiDungSua;
//     return (
//         <form className='card' onSubmit={this.handleSubmit}>
//             <div className='card-header bg-dark text-white'>
//                 <h3>Form đăng ký</h3>
//             </div>
//             <div className='card-body row'>
//                 <div className='col-6'>
//                     <div className='form-group'>
//                         <p>Tài khoản</p>    
//                         <input className='form-control' name='taiKhoan' onChange={this.handleChangeInput} value={taiKhoan} /> 
//                         <div className='text-danger'>{this.state.errors.taiKhoan}</div>
//                     </div>  
//                     <div className='form-group'>
//                         <p>Mật khẩu</p>    
//                         <input value={matKhau} className='form-control' name='matKhau' onChange={this.handleChangeInput} /> 
//                         <div className='text-danger'>{this.state.errors.matKhau}</div>
//                     </div>   
//                     <div className='form-group'>
//                         <p>Email</p>    
//                         <input value={email} type='email' className='form-control' name='email' onChange={this.handleChangeInput} /> 
//                         <div className='text-danger'>{this.state.errors.email}</div>
//                     </div>     
//                 </div>
//                 <div className='col-6'>
//                     <div className='form-group'>
//                         <p>Họ tên</p>    
//                         <input value={hoTen} className='form-control' name='hoTen' onChange={this.handleChangeInput} /> 
//                         <div className='text-danger'>{this.state.errors.hoTen}</div>
//                     </div>  
//                     <div className='form-group'>
//                         <p>Số điện thoại</p>    
//                         <input value={soDienThoai} className='form-control' name='soDienThoai' onChange={this.handleChangeInput} /> 
//                         <div className='text-danger'>{this.state.errors.soDienThoai}</div>
//                     </div>   
//                     <div className='form-group'>
//                         <p>Loại người dùng</p>    
//                         <select name='loaiNguoiDung' className='form-control' onChange={this.handleChangeInput}>
//                             <option value="1">Người dùng</option>    
//                             <option value="2">Quản trị</option>    
//                         </select>
//                     </div>     
//                 </div>
//             </div>
//             <div className='card-footer'>
//                 <button type='submit' className='btn btn-outline-success'>Đăng ký</button>
//                 <button type='button' className='btn btn-outline-primary ml-2' onClick={() => {
//                     // Sử dụng dữ liệu từ giao diện gửi lên redux thay đổi giá trị ng dùng trong mảng
//                 }}>Cập nhật</button>
//             </div>
//         </form>
//     )
//   }
// }

// const mapStateToProps = (rootReducer) => {
//     return {
//         nguoiDungSua: rootReducer.baiTapQuanLyNguoiDungReducer.nguoiDungSua
//     }
// }

// export default connect(mapStateToProps)(FormDangKy);

import React, { Component } from 'react'
import {connect} from 'react-redux';
import { themNguoiDungAction } from '../../redux/actions/baiTapQuanLyNguoiDungAction';
import { THEM_NGUOI_DUNG } from '../../redux/actions/types/baiTapQuanLyNguoiDungType';
class FormDangKy extends Component {
    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            hoTen:'',
            email: '',
            soDienThoai: '',
            loaiNguoiDung: '1', //Dữ liệu trường select bắt buộc phải có kể cả người dùng chưa chọn
            matKhau: ''
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            matKhau: ''
        }
    }

    handleChangeInput = (event) => {
        let { name, value, type } = event.target;

        let newValues = { ...this.state.values };
        //Cập nhật values cho object values
        newValues[name] = value;

        let newErrors = { ...this.state.errors };
        let errorMess = '';
        if (value === '') {
            errorMess = name + ' không được bỏ trống !';
        }
        if (type == 'email') {
            let regexEmail =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)) {
                errorMess = name + ' không đúng định dạng!';
            }

        }

        newErrors[name] = errorMess;

        //Xử lý xong values và errors sẽ cập nhật state cho 2 thuộc tính này
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            // console.log(this.state);
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();//Phương thức cản sự kiện reload của browser 
        // console.log('values',this.state.values);
        //Kiểm tra hợp lệ => cho submit
        let {values,errors} = this.state;
        // let valid = true;
        //Duyệt các giá trị của values
        for(let key in values) {
            if(values[key] === '') { 
                alert('Thông tin chưa hợp lệ!');
                return; 
            }
        }

        for (let key in errors) {
            if(errors[key] != '') {
                alert('Thông tin chưa hợp lệ!');
                return;
            }
        }

        //Khi thông tin form đã hợp lệ => Đưa dữ liệu lên redux
        const action = themNguoiDungAction(this.state.values);
        //Gựi dữ liệu lên reducer
        this.props.dispatch(action);
    }

    // Hàm này đang được gọi bới handleChange(setState)
    // Hàm này đang được gọi khi bấm nút sửa (newProps)
    // Làm sao biết dc khi nào bấm chỉnh sửa thì cần setState
    // Khi nào k bấm chỉnh sửa mà cần change input
    // static getDerivedStateFromProps(newProps, currentState) { // Nhận vaò props mới trước khi render và state hiện tại 
    //     // Hàm này sẽ chạy trước khi giao diện thay đổi (nhận vào props mới và state hiện tại)
    //     // => Lấy props từ redux gán vào state của component
    //     if (newProps.nguoiDungSua.taiKhoan !== currentState.values.taiKhoan) {
    //         currentState = {
    //             ...currentState,
    //             values: newProps.nguoiDungSua
    //         }
    //     }
    //     return currentState;
    // }

    // Hàm này chỉ chạy khi props thay đổi
    componentWillReceiveProps(newProps) {
        // trước khi render và sau khi props thay đổi thì gán props vào state
        this.setState({
            values: newProps.nguoiDungSua
        })
    }
    render() {
        let {taiKhoan,hoTen,soDienThoai,email,matKhau,loaiNguoiDung} = this.state.values;


        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>
                    <h3>Form đăng ký</h3>
                </div>
                <div className='row card-body'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Tài khoản</p>
                            <input className='form-control' name="taiKhoan" onChange={this.handleChangeInput} value={taiKhoan} />
                            <div className='text-danger'>{this.state.errors.taiKhoan}</div>
                        </div>
                        <div className='form-group'>
                            <p>Mật khẩu</p>
                            <input className='form-control' name="matKhau" onChange={this.handleChangeInput} value={matKhau} />
                            <div className='text-danger'>{this.state.errors.matKhau}</div>


                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <input type="email" className='form-control' name="email" onChange={this.handleChangeInput} value={email} />
                            <div className='text-danger'>{this.state.errors.email}</div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Họ tên</p>
                            <input className='form-control' name="hoTen" onChange={this.handleChangeInput} value={hoTen} />
                            <div className='text-danger'>{this.state.errors.hoten}</div>

                        </div>
                        <div className='form-group'>
                            <p>Số điện thoại</p>
                            <input className='form-control' name="soDienThoai" onChange={this.handleChangeInput} value={soDienThoai}/>
                            <div className='text-danger'>{this.state.errors.soDienThoai}</div>

                        </div>
                        <div className='form-group'>
                            <p>Loại người dùng</p>
                            <select value={loaiNguoiDung} name="loaiNguoiDung" className='form-control' onChange={this.handleChangeInput}>
                                <option value="1">Người dùng</option>
                                <option value="2">Quản trị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-outline-success'>Đăng ký</button>
                    <button type='button' className='btn btn-outline-primary ml-2' onClick={() => {
                        const action = {
                            type: 'CAP_NHAT_NGUOI_DUNG',
                            nguoiDungCapNhat: this.state.values
                        }
                        this.props.dispatch(action);
                    }}>Cập nhật</button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        nguoiDungSua: rootReducer.baiTapQuanLyNguoiDungReducer.nguoiDungSua
    }
}



export default connect(mapStateToProps)(FormDangKy);