import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { baiTapGameXucXacReducer } from "./Reducer/BaiTapGameXucXacReducer";
import { baiTapQuanLyNguoiDungReducer } from "./Reducer/BaiTapQuanLyNguoiDungReducer";
import { carDetailReducer } from "./Reducer/carDetailReducer";
import { FakeBookAppReducer } from "./Reducer/FakeBookAppReducer";
import { gioHangReducer } from "./Reducer/gioHangReducer";
import { productDetailReducer } from "./Reducer/productDetailReducer";
import { toDoListReducer } from "./Reducer/toDoListReducer";

import reduxThunk from 'redux-thunk';
import { modalReducer } from "./Reducer/modalReducer";
import { quanLyNguoiDungReducer } from "./Reducer/quanLyNguoiDungReducer";

const rootReducer = combineReducers({
    // Nơi chứa các state của ứng dụng
    carDetailReducer,
    productDetailReducer,
    gioHangReducer,
    baiTapGameXucXacReducer,
    baiTapQuanLyNguoiDungReducer,
    FakeBookAppReducer,
    toDoListReducer,
    modalReducer,
    quanLyNguoiDungReducer
});

let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducer, composeCustom);