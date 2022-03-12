

const stateDefault = {
    gioHang: [
        // {maSP: 1, tenSP: 'Iphone', giaBan: 1000, soLuong: 3, hinhAnh: 'https://picsum.photos/200'}
    ]
}

export const gioHangReducer = (state = stateDefault, action) => {
    // console.log('action', action);
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

        case 'XOA_GIO_HANG': {
            let gioHang = [...state.gioHang];
            gioHang = gioHang.filter(sp => sp.maSP !== action.maSanPhamClick);

            // Cập nhật lại state.gioHang
            state.gioHang = gioHang;

            return {...state};
        }

        case 'TANG_GIAM_SL': {
            let gioHang = [...state.gioHang];
            // Tìm ra sp cẩn tăng giảm số lượng
            let spTangGiam = gioHang.find(sp => sp.maSP === action.maSanPham);
            if(spTangGiam) {
                spTangGiam.soLuong += action.soLuong;
                if (spTangGiam.soLuong < 1) {
                    // alert('Số lượng tối thiểu là 1!');
                    // spTangGiam.soLuong -= action.soLuong;
                    // return {...state};
                    if(window.confirm('Bạn có muốn xóa sản phẩm hay không')) {
                        state.gioHang = gioHang.filter(sp => sp.maSP !== action.maSanPham);
                        return {...state};
                    } else {
                        spTangGiam.soLuong -= action.soLuong;
                    }
                }
            }
            // gán lại giỏ hàng redux = giỏ hàng đã xử lý
            state.gioHang = gioHang;
            return {...state};
        }
        default: return state;
    }
}