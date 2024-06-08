import {useState, useEffect} from 'react';
import taskApi from '../api/task/taskApi';

function TaskTableBT () {

    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const tasks = await taskApi.getTasks();
            setTasks(tasks);
            console.log("TaskTable.fetchTasks tasks: ", tasks);
        } catch (error) {
            console.error("TaskTable.fetchTasks error: ", error);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <div>
                <h5>Task Table</h5>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskTableBT;