


const stateDefault = {
    arrPhim: []
}

export const quanLyPhimReducer = (state = stateDefault, action) => {
    
    switch(action.type) {
        case 'LAY_DANH_SACH_PHIM': {
            state.arrPhim = action.arrPhim;
            return {...state}
        }
        default: return state;
    }
}