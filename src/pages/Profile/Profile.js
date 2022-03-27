import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { layThongTinNguoiDungAction } from '../../redux/actions/quanLyNguoiDungAction';
import { ACCESSTOKEN } from '../../util/settting';

export default function Profile() {
    const {userProfile} = useSelector(rootReducer => rootReducer.quanLyNguoiDungReducer);
    const dispatch = useDispatch();
    console.log('userProfile', userProfile);
    // trang này sẽ hiển thị thông tin của người đăng nhập
    
    useEffect(() => {
        // gọi api lấy thông tin ng dùng để load lên redux
        const action = layThongTinNguoiDungAction();
        dispatch(action);
    }, [])

    if (!localStorage.getItem(ACCESSTOKEN)) {
        alert('Yêu cầu đăng nhập tài khoản !');
        return <Redirect to='/login' />
    }
  return (
    <div className='container'>
        <p>Tài khoản: {userProfile.taiKhoan}</p>
        <p>Họ tên: {userProfile.hoTen}</p>
        <p>Email: {userProfile.email}</p>
        <p>Số điện thoại: {userProfile.soDT}</p>
    </div>
  )
}
