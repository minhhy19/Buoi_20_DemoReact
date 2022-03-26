import { USER_LOGIN } from "../../util/settting";

let usLogin;
// kiểm tra xem localStorage có giá trị hay k để load giá trị mặc định cho userLogin
if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: usLogin
}

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type) {
        default: return state;
    }
}