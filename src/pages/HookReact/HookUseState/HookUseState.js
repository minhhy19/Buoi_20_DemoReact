// rfc: React function component
import React, {useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function HookUseState() {
    /**
     * this.state = {
     *  like: 1
     * }
     */
    // let [state, setState] = useState({like: 1}); // useSate(stateDefault)
    let [like, setLike] = useState(1); // useSate(stateDefault)

  return (
    <div className='container'>
        <div className='card w-25 mt-2'>
            <img src='https://i.pravatar.cc?u=39' alt="..." />
            <div className='card-body'>
                <span className='text text-danger'>{like} ❤</span>
                <button className='btn btn-danger' onClick={() => {
                    setLike(like + 1)
                }}>Like</button>
            </div>
        </div>
        <hr />
        <h3>Bài tập chọn xe</h3>
        <BaiTapChonXe />
    </div>
  )
}
