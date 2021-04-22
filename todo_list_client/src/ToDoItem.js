import React from 'react';
import { FaTimes } from 'react-icons/fa' 
import { FaEdit } from 'react-icons/fa'

const ToDoItem = (props) =>{
    return (
        <div className="todoItem container" onDoubleClick={(() => props.onToggle(props.task.id))}>
            <div className="row">
            <div className="col-sm">
                    <input type="checkbox"></input>
                </div>
                <div className="col-sm">
                    <p>{props.task.text}</p>
                </div>
                <div className="col-sm">
                    <p>{props.task.day}</p>
                </div>
                <div className="col-sm">
                    <FaTimes onClick={() => props.onDelete(props.task.id)}/>
                    <FaEdit />
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;