import React, {useState} from 'react'

export default function BaiTapChonXe() {
    let [imgSrc, setImgSrc] = useState("./img/products/black-car.jpg"); // useSate(stateDefault)

    let changeColor = color => {
        setImgSrc(`./img/products/${color}-car.jpg`)
    }
  return (
    <div className="container">
                <h3 className="text-center">Bài tập chọn màu xe</h3>
                <div className="row">
                    <div className="col-6">
                        <img
                            className="w-100"
                            src={imgSrc}
                            alt="..."
                        />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button className='btn bg-dark text-white'
                                    onClick={() => {
                                        setImgSrc(`./img/products/black-car.jpg`)
                                    }}
                                    style={{color: "black"}}
                                >
                                    Black Car
                                </button>
                            </div>
                            <div className="col-3">
                                <button className='btn bg-dark text-white'
                                    onClick={() => {
                                        changeColor('steel');
                                    }}
                                    style={{color: "gray"}}
                                >
                                    Steel Car
                                </button>
                            </div>
                            <div className="col-3">
                                <button className='btn bg-secondary text-white'
                                    onClick={() => {
                                        changeColor('silver');
                                    }}
                                    style={{color: "silver"}}
                                >
                                    Silver Car
                                </button>
                            </div>
                            <div className="col-3">
                                <button className='btn bg-danger text-white'
                                    onClick={() => {
                                        changeColor('red');
                                    }}
                                    style={{color: "red"}}
                                >
                                    Red Car
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
