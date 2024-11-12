import './ToDoItem.css'
import { IoMdDoneAll } from "react-icons/io";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useRef, useState } from 'react';


export default function ToDoItem({todo , toggleComplated , deleteTodo , editTodo}){

    const [newTask , setNewTask] = useState(todo.task)


    const changeHandler = e => setNewTask(e.target.value)

    const inputRef = useRef(null)

    const editHandler = () =>{
        if(!todo.complated){
            inputRef.current.focus()
            editTodo(todo.id , newTask)
        }

    }
    
    const blurHandler = () => editTodo(todo.id , newTask)

    return(
        <>
            <div className="todo-item">
                <input type="text" ref={inputRef} onBlur={blurHandler} onChange={changeHandler} className={todo.complated && 'done'} value={!todo.isEditing ? todo.task : newTask}/>
                <div className="icons-container">
                    <IoMdDoneAll onClick={()=> toggleComplated(todo.id)} />
                    <BiSolidPencil onClick={editHandler}/>
                    <FaTrashAlt onClick={()=> deleteTodo(todo.id)} />
                </div>
            </div>
        </>
    )
}