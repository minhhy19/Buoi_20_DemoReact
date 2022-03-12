import { combineReducers, createStore } from "redux";
import { baiTapGameXucXacReducer } from "./Reducer/BaiTapGameXucXacReducer";
import { baiTapQuanLyNguoiDungReducer } from "./Reducer/BaiTapQuanLyNguoiDungReducer";
import { carDetailReducer } from "./Reducer/carDetailReducer";
import { gioHangReducer } from "./Reducer/gioHangReducer";
import { productDetailReducer } from "./Reducer/productDetailReducer";

const rootReducer = combineReducers({
    // Nơi chứa các state của ứng dụng
    carDetailReducer,
    productDetailReducer,
    gioHangReducer,
    baiTapGameXucXacReducer,
    baiTapQuanLyNguoiDungReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());