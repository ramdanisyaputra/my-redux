import React from "react";
import { useSelector } from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.lists.todos)
    return(
        <ul>
            {todos.map(item =>
                <li key={item.id}>
                    {item.title}
                </li>
            )}
        </ul>
    )
}

export default Todos