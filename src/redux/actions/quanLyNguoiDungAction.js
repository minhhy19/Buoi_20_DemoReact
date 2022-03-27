import axios from "axios"
import { ACCESSTOKEN, DOMAIN, http, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/settting"
import { history } from '../../util/settting';

// userLogin: {taiKhoan: '', matKhau: ''}
export const dangNhapAction = (userLogin) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: userLogin,
                headers: { // token vào phần thuộc tính header
                    TokenCybersoft: TOKEN_CYBERSOFT
                }
            })
            // Lưu lại thông tin user và token khi ng dùng đăng nhập thành công
            let usLogin = result.data.content;
            let token = usLogin.accessToken;
            // Lưu thông tin token vào storage để dùng cho các api sau
            localStorage.setItem(ACCESSTOKEN, token);
            // thông tin user trả về chuyển về chuỗi => lưu vào storage
            localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));

            console.log(result.data);
            // Chuyển hướng trang
            history.push('/home');
        } catch (err) {
            console.log(err.response?.data);
        }
    }
}

export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
            console.log(result);
            // dispatch kết quả lên redux
            dispatch({
                type: 'LAY_THONG_TIN_NGUOI_DUNG',
                userProfile: result.data.content
            })
            
        } catch (err) {
            if (err.response.status === 404) {
                alert('Đường dẫn không hợp lệ');
            }
            console.log(err.response?.data);
        }
    }
}
