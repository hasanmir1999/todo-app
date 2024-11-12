import './ToDoBoxItem.css'
import ToDoItem from '../todoitem/ToDoItem'
export default function ToDoBoxItem({todos , toggleComplated , deleteTodo , editTodo}){
    return(
        <>
            <div className="todo-items-container">
                {todos.map( (todo , index) =>(
                    <ToDoItem key={index} todo={todo} toggleComplated={toggleComplated} deleteTodo={deleteTodo} editTodo={editTodo} />
                ))}
            </div>
        </>
    )
}