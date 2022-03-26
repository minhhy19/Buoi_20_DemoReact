import React, {useState, useEffect} from 'react'
import axios from 'axios';
export default function ToDoAppRFC() {
    const [arrTask, setArrTask] = useState([]);

    // Cách 1: Sử dụng callback cho TH bất đồng bộ
    // useEffect(() => {
    //     let promise = axios({
    //         url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
    //         method: 'GET'
    //     });
    //     // Sau khi gọi API thành công thì set arrTask
    //     promise.then((result) => {
    //         setArrTask(result.data);
    //     })
    //     promise.catch((error) => {
    //         console.log('error', error.response.data);
    //     })
    // }, [])

    useEffect(async () => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            setArrTask(result.data);
            console.log('result', result);
        } catch(error) {
            console.log('err', error);
        }
        console.log(123);
    }, [])

  return (
    <div>
        <h3 className='text-center display-4'>To do app</h3>
        <div className='d-flex justify-content-center'>
            <table className='table w-50'>
                <tbody>
                    {arrTask.map((task, index) => {
                        return <tr key={index}>
                            <td>{task.taskName}</td>
                            <td>
                                {task.status ? 
                                <span className='badge badge-success'>complete</span> : 
                                <span className='badge badge-danger'>incomplete</span>}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
