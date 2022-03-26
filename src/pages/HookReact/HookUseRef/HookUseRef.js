import React, {useRef, useState} from 'react'

export default function HookUseRef() {

    const [number, setNumber] = useState(0);
    let tongRef = useRef(0); // Lưu lại các giá trị thay đổi khi setState

    const inputUserName = useRef(null);
    const inputPassword = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // ngăn chặn reload browser khi submit
        let username = inputUserName.current.value;
        let pass = inputPassword.current.value;
        inputUserName.current.style.color = 'green';
        console.log(username, pass);
    }

  return (
    <div className='container'>
        <div className='form-group'>
            <p>Nhập vào 1 số</p>
            <input className='form-control' onChange={(e) => {
                setNumber(e.target.value);
            }} />
            <button className='btn btn-success' onClick={() => {
                tongRef.current = tongRef.current + Number(number);
                console.log('tongRef.current', tongRef.current);
            }}>Tính tổng</button>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
            <h3>Form useRef</h3>
            <div className='form-group'>
                <p>username</p>
                <input ref={inputUserName} className='form-control' id='username' name='username' />
            </div>
            <div className='form-group'>
                <p>password</p>
                <input ref={inputPassword} className='form-control' id='password' name='password' />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}
