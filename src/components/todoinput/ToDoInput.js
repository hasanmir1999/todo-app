import { useState } from 'react';
import './ToDoInput.css'
import { GoPlusCircle } from "react-icons/go";

export default function ToDoInput({addTodo}){

    const [newTodo , setNewTodo] = useState('')

    const submitHandler = e =>{
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }

    return(
        <>
                <form className='input-container' onSubmit={submitHandler}>
                    <input className="todo-input" value={newTodo} placeholder='things to do...' type="text" onChange={ e => setNewTodo(e.target.value)} />
                    <button type='submit'><GoPlusCircle /></button>
                </form>
        </>
    )
}