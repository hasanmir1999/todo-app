import './ToDo.css'
import ToDoInput from '../todoinput/ToDoInput'
import ToDoBoxItem from '../todoboxitem/ToDoBoxItem'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
uuidv4()

export default function ToDo(){

    const [todos , setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([...todos , { id : uuidv4() , task : todo , complated : false , isEditing : false }])
    }

    const toggleComplated = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo , complated : !todo.complated} : todo))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter( todo => todo.id !== id))
    }

    const editTodo = (id , newTask) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo , isEditing : !todo.isEditing  ,task : newTask} : todo))
    }

    return(
        <>
            <h1>To Do List</h1>
            <ToDoInput addTodo={addTodo}/>
            <ToDoBoxItem todos={todos} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo} />
        </>
)
}
