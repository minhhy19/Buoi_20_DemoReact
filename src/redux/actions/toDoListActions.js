import axios from "axios";

// closure function
export const getAllTaskAction = () => {
    return async (dispatch, getState) => { // getState(): hàm dùng để lấy giá trị từ rootReducer
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            const action = {
                type: 'GET_ALL_TASK',
                arrTask: result.data
            };
            // Thực thi
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const addTaskApiAction = (task) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'POST',
                data: task
            });
            alert(result.data);
            console.log('result', result.data);
            // Sau khi thêm task thành công => dispatch logic getAllTask
            const action = getAllTaskAction();
            dispatch(action);
        } catch (err) {
            console.log(err);
        }
    }
}

export const doneTaskAction = (taskName) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
                method: 'PUT'
            });

            // Cập nhật thành công => Gọi getAllTaskAction
            await dispatch(getAllTaskAction());
        } catch (err) {
            console.log(err);
        }
    }
}

export const rejectTaskAction = (taskName) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
                method: 'PUT'
            });

            // Cập nhật thành công => Gọi getAllTaskAction
            await dispatch(getAllTaskAction());
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteTaskAction = (taskName) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
                method: 'DELETE'
            });

            // Cập nhật thành công => Gọi getAllTaskAction
            await dispatch(getAllTaskAction());
        } catch (err) {
            console.log(err);
        }
    }
}