import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {categoryState, toDoSelector, toDoState} from './atom';
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList() {
    const [category, setCategory] = useRecoilState(categoryState);
    const toDos = useRecoilValue(toDoSelector);
    
    const onInput = (e:React.FormEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = e
        setCategory(value)
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form>
                <select value = {category} onInput={onInput}>
                    <option value="TO_DO">To Do</option>
                    <option value="DOING">Doing</option>
                    <option value="DONE">Done</option>
                </select>
            </form>
            <CreateToDo/>
            {toDos?.map(toDo => <ToDo key = {toDo.id} {...toDo}/> )}
        </div>
    )
}

export default TodoList;