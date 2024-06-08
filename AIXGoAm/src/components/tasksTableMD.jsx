import {useState, useEffect} from 'react';
import taskApi from '../api/task/taskApi';
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "./tasksTableMD.css";

function TaskTableMD () {

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
                
                <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ backgroundColor: '#333', color: '#fff' }}>
                    <TableRow>
                        {/* <TableCell style={{ color: '#fff' }}>Id</TableCell> */}
                        <TableCell style={{ color: '#fff' }}>Title</TableCell>
                        <TableCell style={{ color: '#fff' }} className="time-cell">Time</TableCell>
                        <TableCell style={{ color: '#fff' }}>Status</TableCell>
                        <TableCell style={{ color: '#fff' }}>Details</TableCell>
                        {/* Notifications width fixed */}
                        <TableCell style={{ color: '#fff' }} className="notifications-cell">Notifications</TableCell>
                        <TableCell style={{ color: '#fff' }}>Type</TableCell>
                        <TableCell style={{ color: '#fff' }}>Start Time</TableCell>
                        <TableCell style={{ color: '#fff' }}>End Time</TableCell>
                        <TableCell style={{ color: '#fff' }}>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                        {/* <TableCell>{task.id}</TableCell> */}
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.time}</TableCell>
                        <TableCell>{task.status}</TableCell>
                        <TableCell>{task.details}</TableCell>
                        <TableCell>{
                            task.notifications_info.notifications.map((notification, index) => (
                                <div key={index}>
                                    {/* <p>{`Notification ${index + 1}`}</p> */}
                                    <span>{`Date: ${notification.date_hour}`}</span>
                                </div>
                            ))
                            }</TableCell>
                        <TableCell>{task.type}</TableCell>
                        { task.type === 'Eventos' ?
                        <TableCell>{task.pending_and_events_info.date_hour_start}</TableCell>
                        : <TableCell></TableCell>
                        }
                        { task.type === 'Eventos' ?
                        <TableCell>{task.pending_and_events_info.date_hour_end}</TableCell>
                        : <TableCell></TableCell>
                        }
                        <TableCell>
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Tooltip title="Edit">
                                <IconButton onClick={() => console.log(`Editing ${task.id}`)}>
                                <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton color="error" onClick={() => console.log(`Deleting ${task.id}`)}>
                                <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                            </Box>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default TaskTableMD;