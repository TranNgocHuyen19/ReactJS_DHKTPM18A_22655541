import React, { useState } from 'react'

export default function Bai04() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        setTodo(e.target.value)
    }

    function handleClick() {
        setTodos([...todos, todo]);
    }

    function removeItem(e) {
        const index = e.target.id;
        setTodos(todos.filter((_, i) => i !== parseInt(index)));
    }

    return (
        <div>
            <input type="text" onChange={handleChange} /> <br />
            <button onClick={handleClick}>Add</button>
            <ol>
                {todos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button id={index} onClick={removeItem}>x</button>
                        </li>
                    );
                })}
            </ol>
        </div>
    )
}
