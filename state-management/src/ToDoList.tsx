import React, { useState } from "react";
import {useForm} from 'react-hook-form';

function TodoList() {
    const {register, watch, handleSubmit} = useForm();
    const onValid = (data:any) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", {required:true, minLength: 10})} placeholder="Write a to do" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoList;