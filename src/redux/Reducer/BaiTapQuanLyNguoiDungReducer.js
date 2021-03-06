import { CAP_NHAT_NGUOI_DUNG, SUA_NGUOI_DUNG, THEM_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../actions/types/baiTapQuanLyNguoiDungType";

const stateDefault = {
    mangNguoiDung: [
        {taiKhoan:'abc',hoTen:'B', soDienThoai:'21312412',email:'hy@gmail.com',matKhau:'12312312',loaiNguoiDung:'1'},
        {taiKhoan:'xyz',hoTen:'A', soDienThoai:'21312412',email:'b@gmail.com',matKhau:'12312312',loaiNguoiDung:'1'}
    ],
    nguoiDungSua: {taiKhoan:'',hoTen:'', soDienThoai:'',email:'',matKhau:'',loaiNguoiDung:'1'},
}


//rxreducer
export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case THEM_NGUOI_DUNG: {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            return {...state};
        }
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            mangNguoiDungUpdate = mangNguoiDungUpdate.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan);
            
            state.mangNguoiDung = mangNguoiDungUpdate;
            return {...state};
        }
        case SUA_NGUOI_DUNG: {
            state.nguoiDungSua = action.nguoiDung;
            return {...state};
        }
        case CAP_NHAT_NGUOI_DUNG: {
            // console.log(action);
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            let nguoiDungUpdate = mangNguoiDungUpdate.find(nd => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
            if (nguoiDungUpdate) {
                for (let key in nguoiDungUpdate) {
                    nguoiDungUpdate[key] = action.nguoiDungCapNhat[key];
                }
            }
            // setState mảng người dùng
            state.mangNguoiDung = mangNguoiDungUpdate;
            return {...state};
        }
        default:
            return state
    }
}
