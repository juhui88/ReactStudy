import { atom } from "recoil";

export interface ITodo {
    text: string;
    id: number;
    category: "DONE" | "DOING" | "TO_DO";
}
export const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
});
