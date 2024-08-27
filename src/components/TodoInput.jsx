import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodo, newTodoValue, setNewTodoValue} = props
     
    return (
        <header>
            <input placeholder = "Enter todo..." value={newTodoValue} onChange={(e) => {
                setNewTodoValue(e.target.value)
            }}/>
            <button onClick={() => {
                handleAddTodo(newTodoValue)
                setNewTodoValue('')
            }}>Add</button>
        </header>
    )
}