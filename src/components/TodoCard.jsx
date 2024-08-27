import React from 'react'

export default function TodoCard(props) {
    const {handleDeleteTodo,  handleEditTodo, children, todoIndex} = props
  return (
    <li className='todoItem'>
                        {children}
                        <div className='actionsContainer'>
                            <button onClick={()=> {
                                handleEditTodo(todoIndex)
                            }}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onClick={()=> {
                                handleDeleteTodo(todoIndex)
                            }}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                            
                            
                        </div>
                        
                    </li>
  )
}
