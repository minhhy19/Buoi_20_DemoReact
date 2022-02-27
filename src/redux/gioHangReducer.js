

const stateDefault = {
    gioHang: [
        // {maSP: 1, tenSP: 'Iphone', giaBan: 1000, soLuong: 3, hinhAnh: 'https://picsum.photos/200'}
    ]
}

export const gioHangReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG': {
            // console.log('ACTION', action);
            let gioHang = [...state.gioHang];
            let spGioHang = {...action.sanPham, soLuong: 1};
            // Kiểm tra sp đó đã có trong giỏ hàng hay chưa
            let sp = gioHang.find(sanPham => sanPham.maSP === spGioHang.maSP);
            if (sp) { // nếu sp dispatch lên có trong giỏ hàng rồi => tăng số lượng
                sp.soLuong += 1;
            } else { // nếu sp dispatch lên chưa có trong giỏ hàng => thêm vào giỏ hàng
                gioHang.push(spGioHang);
            }
            // gán lại giỏ hàng redux = giỏ hàng đã xử lý
            state.gioHang = gioHang;
            // console.log('giỏ hàng', state.gioHang);
            return {...state};
        };
        default: return state;
    }
}