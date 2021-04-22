import React from 'react';
import ToDoItem from './ToDoItem';
import Button from './Button';

//const API = 'https://jsonplaceholder.typicode.com/todos';

const ToDoList = (props) => {
        return(
            <div className="todoList">
                <Button text={props.showAdd ? 'Close' : 'Add'} onClick={props.onAdd}></Button>
                {props.tasks.map((task, index) => (<ToDoItem key={index} task={task} onDelete={props.onDelete} onToggle={props.onToggle}></ToDoItem>)
                )}
            </div>
        )
} 

export default ToDoList;