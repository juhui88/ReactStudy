import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atom";

function ToDo({text, category, id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}, } = e
        console.log(name)
        setToDos((prev) => prev.map((oldToDo) => {
            if(oldToDo.id === id) {
                return {text, id, category: name as any};
            }
            return oldToDo;
        }))
        /* setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            console.log(targetIndex)
            const newToDo = { text, id, category: name as any};
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
              ];
        }) */
    };
    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (
                <button name="DOING" onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== "TO_DO" && (
                <button name="TO_DO" onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== "DONE" && (
                <button name="DONE" onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    )
}

export default ToDo;