import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atom";

function ToDo({text, category, id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}, } = e
        setToDos((prev) => prev.map((oldToDo) => {
            if(oldToDo.id === id) {
                return {text, id, category: name as any};
            }
            return oldToDo;
        }))
    };
    const onDeletClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        setToDos((prev) => prev.filter((oldToDo) => oldToDo.id !== id))
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name = {Categories.DOING}  onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name = {Categories.TO_DO}  onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== Categories.DONE && (
                <button name = {Categories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
            <button onClick={onDeletClick}>❌</button>
        </li>
    )
}

export default ToDo;