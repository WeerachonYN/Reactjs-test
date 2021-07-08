import { React, useState, useEffect } from 'react';
export default function Todo() {
    const [isEditing, setEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    // #editing
    const handleEditInputChange = (event) => {
        setCurrentTodo({ ...currentTodo, text: event.target.value })
        console.log("currentTodo", currentTodo);
    }
    const handleEditClick = (event) =>{
        setEditing(true);
        setCurrentTodo({...event})

    }
    const handleUpdateTodo = (id,updatedTodo) => {
        const updatedItem = todos.map((item) =>{
            return item.id === id? updatedTodo:item;
        });setEditing(false);
        setTodos(updatedItem);
    }
    const handleEditSubmit = (event) => {
        event.preventDefault();
        handleUpdateTodo(currentTodo.id,currentTodo)
    }
    // #get localstorage
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    // #init state for get value
    const [todo, setTodo] = useState("");

    // #save to localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // #get value on event
    const handleInput = (event) => {
        setTodo(event.target.value);
    }

    // #addto todo
    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo !== "") {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    // #ตัดช่องว่าง
                    text: todo.trim()
                }
            ])
        }

        setTodo("");
    }
    // #delete
    const handleDelete = (id) => {
        const removeItem = todos.filter((del) => {
            return del.id !== id
        })
        setTodos(removeItem)
    }
    console.log(todos);
    return (
        <div>{isEditing ? (
            <form onSubmit={handleEditSubmit}>
                <h2>EditeTodo</h2>
                <input type="text" name="editTodo" placeholder="Edit Todo" 
                value={currentTodo.text}
                    onChange={handleEditInputChange} />
                <button type="submit"  >Update</button>
                <button onClick={() => setEditing(false)}> Cancel </button>
            </form>) 
            : 
            (<form onSubmit={handleSubmit}>
            <input type="text" name="todo" placeholder="Create a new Todo" value={todo} onChange={handleInput} />
            <button type="submit">Add</button>
        </form>)}
            <ul className="Todo-list">
                {todos.map((item) => (
                    <li key={item.id}>{item.text}
                         <button onClick={() => handleEditClick(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
