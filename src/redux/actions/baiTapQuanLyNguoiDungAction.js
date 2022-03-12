import { THEM_NGUOI_DUNG } from "./types/baiTapQuanLyNguoiDungType"


export const themNguoiDungAction = (nguoiDung) => {
    // Xử lý rất nhiều mới ra dc object
    return {
        type: THEM_NGUOI_DUNG,
        nguoiDung
    }
}