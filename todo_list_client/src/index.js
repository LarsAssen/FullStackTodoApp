import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList'
import Header from './Header/Header';
import AddToDo from './AddToDo';
import { useState, useEffect } from 'react';

const App = () =>{
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, [])

    //fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('/api/todos');
        const data = await res.json();

        return data;
    }

    //delete function
    const onDelete = (id) =>{
        setTasks(tasks.filter((task) => task.id !== id));
    }

    //add function
    const onAdd = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task }
        setTasks([...tasks, newTask])
    }

    //toggle function
    const toggleReminder = (id) =>{
        console.log("toggled");
    }


        return <div>
            <Header title="Todo List" />
            {showAddTask && <AddToDo onAdd={onAdd}/>}
            <ToDoList onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
            
            </div>
    }


ReactDOM.render(<App/>, document.querySelector("#root"));