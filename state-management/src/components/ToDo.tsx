import { ITodo } from "./atom";

function ToDo({text, category}:ITodo) {
    
    return (
        <li>
            <span>{text}</span>
            <button>Done</button>
            <button>Doing</button>
            <button>To Do</button>
        </li>
    )
}

export default ToDo;