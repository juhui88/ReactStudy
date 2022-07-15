import React, { useState } from "react";
import {useForm} from 'react-hook-form';

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
  }

function TodoList() {
    const {register, watch, handleSubmit, formState : {errors}} = useForm<IForm>();
    const onValid = (data:any) => {
        console.log(data)
    }
    return (
        <div>
            <form style={{display:"flex",flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                        required: true ,
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",},
                        })}
                    placeholder="Email" />
                <span>{errors?.email?.message}</span>
                
                <input
                    {...register("firstName", { required: "write here" , })}
                    placeholder="First Name"
                />
                <span>{errors?.firstName?.message}</span>
                
                <input
                    {...register("lastName", { required: "write here" })}
                    placeholder="Last Name"
                />
                 <span>{errors?.lastName?.message}</span>
                
                <input
                    {...register("username", { required: "write here", minLength: 10 })}
                    placeholder="Username"
                />
                <span>{errors?.username?.message}</span>

                <input
                    {...register("password", { required: "write here", minLength: 5 })}
                    placeholder="Password"
                />
                <span>{errors?.password?.message}</span>

                <input
                    {...register("password1", {
                    required: "Password is required",
                    minLength: {
                        value: 5,
                        message: "Your password is too short.",
                    },
                    })}
                    placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <button>add</button>
            </form>
        </div>
    )
}

export default TodoList;